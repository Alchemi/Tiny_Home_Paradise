import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Firestore, getDocs,collection } from '@angular/fire/firestore';
import { propertiesList } from 'app/helpers/propertiesList';
import { subscribeOn } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],encapsulation: ViewEncapsulation.ShadowDom
})
export class ListingsComponent implements OnInit {

  
  

  propertiesList = propertiesList;

  constructor(private afs : Firestore, public data : DataService) { }

 
  
  async ngOnInit(): Promise<void> {
    this.getProperties();
  }

  getProperties(){

   this.data.getProperties().subscribe(res =>{

    this.propertiesList = res.map((e:any) =>{
      
      const data=e.payload.doc.data();
      data.id=e.payload.doc.id; 
      return data})
    
   })
  }


  searchText:string = '';

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText)
  }


  
}
