import { Component, Input } from '@angular/core';
import type { CvSection } from '../cv.types';
import { splitTech } from '../skills/skills.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  @Input() data!: CvSection

  private readonly cache = new Map<string, string[]>();

  stackTokens(stack: string): string[] {
    if (!this.cache.has(stack)) this.cache.set(stack, splitTech(stack));
    return this.cache.get(stack)!;
  }
}
