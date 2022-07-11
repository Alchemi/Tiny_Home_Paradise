import { Component, OnInit } from '@angular/core';
import { propertiesList } from 'app/helpers/propertiesList';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  propertiesList = propertiesList;

  constructor() { }

  ngOnInit(): void {
  }
  zipcodeText:string = '';
  minText:number =0;
  maxText:number =0;
  minSizeText:number =0;
  maxSizeText:number =0;
  bedroomText:number =0;
  bathroomText:number =0;

  onSearchZipcodeEntered(searchValue:string){
    this.zipcodeText = searchValue;
    console.log(this.zipcodeText)
  }
  onSearchMinEntered(searchValue:number){
    this.minText = searchValue;
    console.log(this.minText)
  }
  onSearchMaxEntered(searchValue:number){
    this.maxText = searchValue;
    console.log(this.maxText)
  }
  onSearchMinSizeEntered(searchValue:number){
    this.minSizeText = searchValue;
    console.log(this.minSizeText)
  }
  onSearchMaxSizeEntered(searchValue:number){
    this.maxSizeText = searchValue;
    console.log(this.maxSizeText)
  }
  onBedroomEntered(searchValue:number){
    this.bedroomText = searchValue;
    console.log(this.bedroomText);
  }
  onBathroomEntered(searchValue:number){
    this.bathroomText = searchValue;
    console.log(this.bathroomText);
  }

}
