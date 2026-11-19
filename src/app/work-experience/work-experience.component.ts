import { Component, Input } from '@angular/core';
import type { CvSection } from '../cv.types';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  @Input() data!: CvSection
}
