import { Component, Input, OnInit } from '@angular/core';
import type cvDataType from '../cv-data.json'
import { getOverallExperienceYears } from '../utils';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() data!: typeof cvDataType['work-experience']

  constructor() { }

  ngOnInit(): void {
  }

  get getTotalYearsInIT(): string {
    return getOverallExperienceYears()
  }

}
