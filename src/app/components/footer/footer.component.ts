import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';           // ← neu
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,                                         // ← neu
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
