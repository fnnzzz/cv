import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bio',
  templateUrl: './top-bio.component.html',
  styleUrls: ['./top-bio.component.scss']
})
export class TopBioComponent implements OnInit {
  @Input() data: any

  constructor() { }

  ngOnInit(): void {
  }

}
