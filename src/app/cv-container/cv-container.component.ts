import { Component, Inject, OnInit, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as mainData from '../cv-data.json';
import * as frontendData from '../cv-data-frontend.json';
import type { CvData } from '../cv.types';

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
export class CvContainerComponent implements OnInit {
  readonly cvData: CvData;

  constructor(@Optional() @Inject(Window) private readonly windowRef: Window, private readonly title: Title) {
    this.cvData = pickVariant(windowRef?.location?.search ?? '');
  }

  ngOnInit(): void {
    this.title.setTitle(this.cvData.meta.docTitle);
  }

}
