import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  nameKey: string;
  projectKey: string;
  quoteKey: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule   
  ],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      nameKey: 'TESTIMONIALS.EVELYN_MARX.NAME',
      projectKey: 'TESTIMONIALS.EVELYN_MARX.PROJECT',
      quoteKey: 'TESTIMONIALS.EVELYN_MARX.QUOTE'
    },
    {
      nameKey: 'TESTIMONIALS.JAMES_RUGMAN.NAME',
      projectKey: 'TESTIMONIALS.JAMES_RUGMAN.PROJECT',
      quoteKey: 'TESTIMONIALS.JAMES_RUGMAN.QUOTE'
    }
  ];
}
