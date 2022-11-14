import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

}