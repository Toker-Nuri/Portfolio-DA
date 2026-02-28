// src/app/components/privacy-policy/privacy-policy.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements AfterViewInit {
  constructor(private viewportScroller: ViewportScroller) {}
  
  ngAfterViewInit() {
    // Strategy 1: Immediate scroll using window.scrollTo
    this.scrollToTop();
    
    // Strategy 2: ViewportScroller after DOM is ready (100ms)
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.scrollToTop();
    }, 100);
    
    // Strategy 3: Additional fallback for mobile devices (200ms)
    setTimeout(() => {
      this.scrollToTop();
    }, 200);
  }
  
  private scrollToTop(): void {
    window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
