import { Component, Inject, OnInit, Optional } from '@angular/core';
import * as cvData from '../cv-data.json'

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
  readonly cvData = cvData

  constructor(@Optional() @Inject(Window) private readonly windowRef: Window) { }

  ngOnInit(): void {
  }

  saveCv() {
    this.windowRef?.print()
  }

}
