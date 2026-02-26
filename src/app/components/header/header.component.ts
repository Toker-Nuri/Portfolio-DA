import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule   
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuOpen = false;
  currentLang: 'de' | 'en';

  constructor(private translate: TranslateService) {
    // Gespeicherte Sprache aus localStorage laden oder Default verwenden
    const savedLang = localStorage.getItem('selectedLanguage') as 'de' | 'en';
    this.currentLang = savedLang || this.translate.getDefaultLang() as 'de' | 'en';
    this.translate.use(this.currentLang);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  useLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
    this.currentLang = lang;
    // Sprache in localStorage speichern
    localStorage.setItem('selectedLanguage', lang);
  }
}
