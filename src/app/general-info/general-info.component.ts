import { Component, Input, OnInit } from '@angular/core';
import type cvDataType from '../cv-data.json'

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  @Input() data!: typeof cvDataType['general-info']

  constructor() { }

  ngOnInit(): void {
  }

}
