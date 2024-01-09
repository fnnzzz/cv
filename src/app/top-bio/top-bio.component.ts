import { Component, Input, OnInit } from '@angular/core';
import type cvDataType from '../cv-data.json'

@Component({
  selector: 'app-top-bio',
  templateUrl: './top-bio.component.html',
  styleUrls: ['./top-bio.component.scss']
})
export class TopBioComponent implements OnInit {
  @Input() data!: typeof cvDataType['topbio']

  ngOnInit(): void {
  }
}
