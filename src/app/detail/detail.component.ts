import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() detailUser;
  @Output() emitDeleteUser = new EventEmitter();


  constructor() { }

  delete(){
    this.emitDeleteUser.emit(this.detailUser);
  }


  ngOnInit(): void {
  }

}
