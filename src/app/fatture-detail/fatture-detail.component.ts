import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatture-detail',
  templateUrl: './fatture-detail.component.html',
  styleUrls: ['./fatture-detail.component.css']
})
export class FattureDetailComponent implements OnInit {
  @Input() currentFattura
  constructor() { } 

  ngOnInit(): void {
  }

}
