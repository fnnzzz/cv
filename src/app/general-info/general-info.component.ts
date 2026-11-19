import { Component, Input } from '@angular/core';
import type { CvEducation } from '../cv.types';

/** Education & certifications, the last block of the CV. */
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {
  @Input() data!: CvEducation
}
