import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  currentSlide = 0;
  
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

  onScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const itemWidth = event.target.querySelector('.testimonial')?.offsetWidth || 297;
    const gap = 24; // 1.5rem gap
    this.currentSlide = Math.round(scrollLeft / (itemWidth + gap));
  }
}
