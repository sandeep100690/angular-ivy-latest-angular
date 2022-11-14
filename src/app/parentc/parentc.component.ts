import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentc',
  templateUrl: './parentc.component.html',
  styleUrls: ['./parentc.component.css']
})
export class ParentcComponent implements OnInit {
  currentItem = 'Television';
  items = ['item1','item2','item3','item4'];
  
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem:string){
    this.items.push(newItem);
  }

}