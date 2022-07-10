import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredZipcode:string ='';
  enteredMinPrice:number=0;
  enteredMaxPrice:number=0;

  @Output()
  searchZipcodeChanged : EventEmitter<string> = new EventEmitter<string>();
  @Output()
  searchMinChanged : EventEmitter<number> = new EventEmitter<number>();
  @Output()
  searchMaxChanged : EventEmitter<number> = new EventEmitter<number>();
  onSearchZipcodeChanged(){
    this.searchZipcodeChanged.emit(this.enteredZipcode); 
  }
  onSearchMinChanged(){
    this.searchMinChanged.emit(this.enteredMinPrice); 
  }
  onSearchMaxChanged(){
    this.searchMaxChanged.emit(this.enteredMaxPrice); 
  }

}
