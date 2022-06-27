import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title : string;
  @Output() incBy = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  plusOneClick() {
    this.incBy.emit(1);
  }

  plusTwoClick() {
    this.incBy.emit(2);
  }

  minusOneClick() {
    this.incBy.emit(-1);
  }

  minusTwoClick() {
    this.incBy.emit(-2);
  }
}
