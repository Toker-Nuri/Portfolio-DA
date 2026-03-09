import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    const savedLang = localStorage.getItem('selectedLanguage') as 'de' | 'en';
    this.currentLang = savedLang || this.translate.getDefaultLang() as 'de' | 'en';
    this.translate.use(this.currentLang);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  useLanguage(lang: 'de' | 'en'): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

  scrollToSection(sectionId: string): void {
    this.mobileMenuOpen = false;

    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => this.doScroll(sectionId), 100);
      });
    } else {
      this.doScroll(sectionId);
    }
  }

  private doScroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
