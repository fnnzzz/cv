import { Component, Input } from '@angular/core';
import type { CvSummary } from '../cv.types';
import { getOverallExperienceYears } from '../utils';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() data!: CvSummary

  get paragraphsFormatted() {
    return this.data.paragraphs.map(p => p.replace('{{OVERALL_EXPERIENCE_YEARS}}', getOverallExperienceYears()))
  }
}
