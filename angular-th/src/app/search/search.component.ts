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
  enteredMinSize:number=0;
  enteredMaxSize:number=0;
  enteredBedroom:number=0;
  enteredBathroom:number=0;

  @Output()
  searchZipcodeChanged : EventEmitter<string> = new EventEmitter<string>();
  @Output()
  searchMinChanged : EventEmitter<number> = new EventEmitter<number>();
  @Output()
  searchMaxChanged : EventEmitter<number> = new EventEmitter<number>();
  @Output()
  searchMinSizeChanged : EventEmitter<number> = new EventEmitter<number>();
  @Output()
  searchMaxSizeChanged : EventEmitter<number> = new EventEmitter<number>();
  @Output()
  searchBedChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  searchBathChanged: EventEmitter<number> = new EventEmitter<number>();
  onSearchZipcodeChanged(){
    this.searchZipcodeChanged.emit(this.enteredZipcode); 
  }
  onSearchMinChanged(){
    this.searchMinChanged.emit(this.enteredMinPrice); 
  }
  onSearchMaxChanged(){
    this.searchMaxChanged.emit(this.enteredMaxPrice); 
  }
  onSearchMinSizeChanged(){
    this.searchMinSizeChanged.emit(this.enteredMinSize); 
  }
  onSearchMaxSizeChanged(){
    this.searchMaxSizeChanged.emit(this.enteredMaxSize); 
  }
  onBedChanged(){
    this.searchBedChanged.emit(this.enteredBedroom);
  }
  onBathChanged(){
    this.searchBathChanged.emit(this.enteredBathroom);
  }

}
