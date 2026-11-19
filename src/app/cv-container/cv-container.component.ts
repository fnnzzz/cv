import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as mainData from '../cv-data.json';
import * as frontendData from '../cv-data-frontend.json';
import type { CvData, CvHighlight } from '../cv.types';
import { getOverallExperienceYears } from '../utils';

/** `?v=frontend` shows the frontend-focused CV; anything else the main one. */
export function pickVariant(search: string): CvData {
  const v = new URLSearchParams(search).get('v');
  return (v === 'frontend' ? frontendData : mainData) as unknown as CvData;
}

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.scss'],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class CvContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly cvData: CvData;
  readonly highlights: CvHighlight[];
  private observer?: IntersectionObserver;

  constructor(
    @Optional() @Inject(Window) private readonly windowRef: Window,
    private readonly title: Title,
    private readonly host: ElementRef<HTMLElement>,
  ) {
    this.cvData = pickVariant(windowRef?.location?.search ?? '');
    const years = getOverallExperienceYears();
    this.highlights = (this.cvData.highlights ?? []).map((h) => ({ ...h, value: h.value.replace('{{OVERALL_EXPERIENCE_YEARS}}', years) }));
  }

  ngOnInit(): void {
    this.title.setTitle(this.cvData.meta.docTitle);
  }

  /** Sections fade in as they scroll into view; skipped without IntersectionObserver or with reduced motion. */
  ngAfterViewInit(): void {
    const w = this.windowRef;
    if (!w || !('IntersectionObserver' in w) || w.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const items = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal'));
    w.document.documentElement.classList.add('js-reveal');
    this.observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          this.observer?.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    items.forEach((el) => this.observer!.observe(el));
    // printing must never catch a section mid-animation
    w.addEventListener('beforeprint', () => items.forEach((el) => el.classList.add('is-in')));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  saveCv() {
    this.windowRef?.print()
  }

}
