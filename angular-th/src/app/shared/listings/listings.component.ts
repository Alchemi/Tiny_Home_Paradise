import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Firestore, getDocs,collection } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { propertiesList } from 'app/helpers/propertiesList';
import { subscribeOn } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],encapsulation: ViewEncapsulation.ShadowDom
})
export class ListingsComponent implements OnInit {

  
  
  
  
  public data:any=[]
  constructor(private afs : Firestore,) { 
    this.getProperties();
  }
  
 pList:Product[]=[];
  
 ngOnInit(): void {
    this.getProperties();
  }
  zipcodeText:string = '';
  minText:number =0;
  maxText:number =0;
  minSizeText:number =0;
  maxSizeText:number =0;
  bedroomText:number =0;
  bathroomText:number =0;
  
  dbInstance = collection(this.afs, 'products')
  getProperties(){

   getDocs(this.dbInstance)
   .then((response) => {
    this.data= [...response.docs.map((item) =>{
      return {...item.data(), id: item.id}
    })]
    
   })
   
  }


  searchText:string = '';

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
