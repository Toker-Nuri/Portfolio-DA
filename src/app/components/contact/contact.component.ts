import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';  

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule    
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = { name: '', email: '', message: '', agree: false };
  sending = false;
  showSuccess = false;

  submitContact(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (this.sending) return;
    this.sending = true;
    const data = new FormData(form);

    fetch('https://formspree.io/f/xkgqwvla', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        this.sending = false;
        if (response.ok) {
          this.showSuccess = true;
          form.reset();
          this.contact = { name: '', email: '', message: '', agree: false };
        } else {
          alert('Oops! Something went wrong.');
        }
      })
      .catch(() => {
        this.sending = false;
        alert('Network error.');
      });
  }

  closeModal() {
    this.showSuccess = false;
  }
}
