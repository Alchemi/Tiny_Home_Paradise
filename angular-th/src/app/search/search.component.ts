import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {

   }
   search:any = localStorage.getItem('search')
  ngOnInit(): void {
    if(localStorage.getItem('search')){
      this.enteredZipcode = this.search;
      localStorage.removeItem('search');
      this.onSearchZipcodeChanged()
        
    }
    else{}
  }
  enteredZipcode:any ='';
  enteredMinPrice:any='';
  enteredMaxPrice:any='';
  enteredMinSize:any='';
  enteredMaxSize:any='';
  enteredBedroom:number=0;
  enteredBathroom:number=0;
  enteredKeyword:string='';
  enteredMobility:string='';

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
  @Output()
  searchKeywordChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  searchMobilityChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchKeywordChanged(){
    this.searchKeywordChanged.emit(this.enteredKeyword);
  }
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
  onMobilityChanged(){
    this.searchMobilityChanged.emit(this.enteredMobility);
  }

}
