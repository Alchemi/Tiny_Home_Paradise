
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { collection, Firestore, getDocs, limit, query, where } from '@angular/fire/firestore';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ANIMATION_ELEMENT } from 'app/animations/elementAnimations';

import { Product } from 'app/model/product';
import { UiService } from 'app/services/ui.service';
import { DataService } from '../data.service';
import {gsap} from 'gsap'

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  // @HostBinding('elementAnimations')
  // id:number | any;
  // animationElement = ANIMATION_ELEMENT;

  // @ViewChild('info', {static:true}) info!: ElementRef<HTMLDivElement>;
  // @ViewChild('back', {static:true}) back!: ElementRef<HTMLAnchorElement>;
  // @ViewChild('image', {static:true}) image!: ElementRef<HTMLDivElement>;
  // @ViewChild('call', {static:true}) call!: ElementRef<HTMLButtonElement>;

  // @Input() product2: any; 
  // @Input() imageUrl:any;
  // @Input() house_name= "asdpf";
  // @Input() location:any;
  // @Input() baths:any;
  // @Input() rooms:any;
  // @Input() size:any;
  // @Input() price:any;
  // @Input() year:any;
  // @Input() mobility: any;

  // productList =  localStorage.getItem("key");
  // public cu: any;
  // item: any;



  constructor(private firestore:Firestore, private router : Router) { }

  product!: Product; 
  prop = localStorage.getItem('prop')
  property:any;

  ngOnInit(): void {
    this.getPropDetail(this.prop)

}

async getPropDetail(prop:any) {
    


  const cuRef = collection(this.firestore, 'products')
  const q = query(cuRef, where("house_name", "==", prop), limit(1))
  const querySnapshot = await getDocs(q).then((response) => {
    this.property= [...response.docs.map((item) =>{
      return {...item.data(), id: item.id}
    })]
    
   })
}

goBack(){
  this.router.navigate(['listings'])
}

}
