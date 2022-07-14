import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Firestore, getDocs,collection } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { propertiesList } from 'app/helpers/propertiesList';
import { Subject, subscribeOn, takeUntil } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from 'app/model/product';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { OpenState, UiService } from 'app/services/ui.service';
import { Router } from '@angular/router';

import { } from 'rxjs';
//import {gsap} from 'gsap';
import { WishListService } from 'app/services/wish-list.service';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  animations: [
    trigger('property-detailsPage', [
      state(
        'open',
        style({
          opacity:1,
          width:'30%',
          transform:'translateX(0)',
          visibility: 'visible'
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          width: '0%',
          transform: 'translateX(80px)',
          visibility: 'hidden'
        })
      ),
      transition('closed => open', [animate('0.4s ease-out')]),
      transition('open => closed', [animate('0.4s ease-out')]),
    ])
  ]
})
export class ListingsComponent implements OnInit{
  // @ViewChild('nav', {static: true}) nav: ElementRef<HTMLUListElement>;
  // destroyed$ = new Subject<void>;
  // openState: OpenState;

  addtoWishList(item: any){
    this.wishListService.addtoWishList(item);
    window.alert("you have added this to your wishlist");
  }
  

  
  public data: any=[]
  constructor(private afs : Firestore, private wishListService: WishListService,public ui: UiService, private cdr: ChangeDetectorRef, private router: Router) { 
    
  }
  

  
 ngOnInit(): void {


    this.getProperties();
    
    
    // this.ui
    // .getOpenState()
    // .pipe(takeUntil(this.destroyed$))
    // .subscribe((openState: OpenState) => {
    //   this.openState = openState;
    //   this.cdr.detectChanges();
    // });
  }

  // ngOnDestroy() {
  //   this.destroyed$.next();
  //   this.destroyed$.complete();
  // }


  // onNavigate(link: string) {
  //   if(this.router.url.startsWith('/listings') && link != '/listings') {
  //     this.ui.openState.next('closed');
  //   }
  // }

  zipcodeText:string = '';
  minText:any ='';
  maxText:any ='';
  minSizeText:any='';
  maxSizeText:any ='';
  bedroomText:number =0;
  bathroomText:number =0;
  keywordText:string='';
  mobilityText:string='';
  
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
  onSearchKeywordEntered(searchValue:string){
    this.keywordText=searchValue;
    console.log(this.keywordText)
  }

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
  onMobilityEntered(searchValue:string){
    this.mobilityText = searchValue;
    console.log(this.mobilityText);
  }


  
}
