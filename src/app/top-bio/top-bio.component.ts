import { Component, Input } from '@angular/core';
import type { CvHeader } from '../cv.types';

@Component({
  selector: 'app-top-bio',
  templateUrl: './top-bio.component.html',
  styleUrls: ['./top-bio.component.scss']
})
export class TopBioComponent {
  @Input() data!: CvHeader
}
