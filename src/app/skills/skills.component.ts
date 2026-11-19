import { Component, Input } from '@angular/core';
import type { CvSkills } from '../cv.types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() data!: CvSkills
}
