import { Component, OnInit } from '@angular/core';
import * as cvData from '../cv-data.json'

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.scss'],
})
export class CvContainerComponent implements OnInit {
  readonly cvData = cvData

  constructor() { }

  ngOnInit(): void {
  }

}
