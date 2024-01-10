import { Component, Input, OnInit } from '@angular/core';
import type cvDataType from '../cv-data.json'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() data!: typeof cvDataType['summary']

  constructor() { }

  ngOnInit(): void {
  }

}
