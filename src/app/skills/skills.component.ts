import { Component, Input } from '@angular/core';
import type { CvSkills } from '../cv.types';

/** Splits "A (x, y), B; C" into ["A (x, y)", "B", "C"]: commas and semicolons inside brackets stay. */
export function splitTech(items: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of items) {
    if (ch === '(') depth++;
    if (ch === ')') depth = Math.max(0, depth - 1);
    if ((ch === ',' || ch === ';') && depth === 0) {
      if (cur.trim()) out.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  rows: { name: string; items: string; tokens: string[] }[] = [];

  @Input() set data(v: CvSkills) {
    this._data = v;
    this.rows = v.rows.map((r) => ({ ...r, tokens: splitTech(r.items) }));
  }
  get data(): CvSkills {
    return this._data;
  }
  private _data!: CvSkills;
}
