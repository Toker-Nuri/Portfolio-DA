import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { initScrollAnimations } from '../../scroll-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialisiere Scroll-Animationen nach dem Rendern der Component
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
  }
}
