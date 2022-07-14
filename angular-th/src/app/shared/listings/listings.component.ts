import { ChangeDetectorRef, Component, ElementRef, HostBinding, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, OnChanges, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { Firestore, getDocs,collection } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
// import { propertiesList } from 'app/helpers/propertiesList';
import { Subject, subscribeOn, takeUntil } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from 'app/model/product';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { OpenState, UiService } from 'app/services/ui.service';
import { Router } from '@angular/router';


import { } from 'rxjs';
//import {gsap} from 'gsap';

import { WishListService } from 'app/services/wish-list.service';
import { ANIMATION_ELEMENT, elementAnimations } from 'app/animations/elementAnimations';



@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'], encapsulation:ViewEncapsulation.ShadowDom,
  // animations: [ [elementAnimations],
  //   trigger('property-details', [
  //     state(
  //       'open',
  //       style({
  //         opacity:1,
  //         width:'30%',
  //         transform:'translateX(0)',
  //         visibility: 'visible'
  //       })
  //     ),
  //     state(
  //       'closed',
  //       style({
  //         opacity: 0,
  //         width: '0%',
  //         transform: 'translateX(80px)',
  //         visibility: 'hidden'
  //       })
  //     ),
  //     transition('closed => open', [animate('0.4s ease-out')]),
  //     transition('open => closed', [animate('0.4s ease-out')]),
  //   ])
  // ],
})
export class ListingsComponent implements OnInit{
  // @HostBinding('@elementAnimations') animate: any;
  // animationElement= ANIMATION_ELEMENT;
  // destroyed$ = new Subject<void>();
  // openState: OpenState = "open";

  addtoWishList(item: any){
    this.wishListService.addtoWishList(item);
    window.alert("you have added this to your wishlist");
  }
  


  public data:any=[]
  constructor(private afs : Firestore, private wishListService: WishListService, public ui:UiService, private cdr: ChangeDetectorRef, private router: Router) {  }

  
  public data: any=[]
  constructor(private afs : Firestore, private wishListService: WishListService,public ui: UiService, private cdr: ChangeDetectorRef, private router: Router) { 
    
  }
  


  
 ngOnInit(): void {
    this.getProperties();
    // this.ui
    //  .getOpenState().pipe(takeUntil(this.destroyed$)).subscribe((openState: OpenState | any) => {
    //    this.openState = openState;
    //    this.cdr.detectChanges();
    //  });

    //   this.productList=[];
    //  this.productList.forEach((a:any) =>{
    //   Object.assign(a,{quantity:1})
    //  })
  }

  // ngOnDestroy() {
  //   this.destroyed$.next();
  //   this.destroyed$.complete();
  // }

  
  // ngAfterViewInit(){
  // }

  // animationDone(event: { element: HTMLDivElement; }){
  //   console.log(event.element);
  //   (event.element as HTMLDivElement).childNodes.forEach((item) =>{
  //     const node =item as HTMLDivElement;
  //     if (node.classList && node.classList.contains('active')){
  //       console.log(node);

  //       node.scrollIntoView({behavior:'smooth'});
  //     }
  //   })
  // }

//   @Output()product:any;
//   house_name:any;
//   imageUrl:any;
//   location:any;
//   rooms:any;
//   baths:any;
//   size:any;
//   price:any;
//   year:any;
//   mobility:any;

 onNavigate(){
  }


  


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

  navigate(item:any){
    localStorage.setItem('prop',item)
    console.log(item)
    this.router.navigate(['property-details'])
  }
  
  // @Input()
  // navigateChanged: EventEmitter<any> = new EventEmitter<any>();
    
}
