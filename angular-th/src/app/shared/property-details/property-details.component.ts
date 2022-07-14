import { Component, ElementRef, HostBinding, Input, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ANIMATION_ELEMENT } from 'app/animations/elementAnimations';
import { Product } from 'app/model/product';
import { UiService } from 'app/services/ui.service';
import { DataService } from '../data.service';
import {gsap} from 'gsap'
import { collection, limit, query, where } from '@angular/fire/firestore';
import { Firestore, getDocs } from '@firebase/firestore';

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

  constructor(public route: ActivatedRoute, private router: Router, public ui: UiService, private data : DataService, private firestore: Firestore) { }



  ngOnInit(): void {

    // console.log(this.item)
    // this.initDetailAnimations();
    // // this.route.params.subscribe((params: Params) => {
    // //   if (params['id']){
    // //     this.id = parseInt(params['id'], 10);
    // //     this.item = this.cu.find((p) => p.productList === this.id);
    // //   }
    // // })
    

    // console.log("asf")
  }

  // ngOnChanges(productList: SimpleChanges) {
  //   productList['house_name']
  //   console.log('ngOnChanges called!')
  // }

  // initDetailAnimations(){
  //   console.log("asdf")
  //   gsap.from(this.back.nativeElement, {
  //     duration:0.5,
  //     opacity: 0,
  //     x: -10,
  //     delay: 0.2
  //   });
  //   gsap.from(this.image.nativeElement, {
  //     duration:0.5,
  //     opacity: 0,
  //     x: -15,
  //     delay: 0.4
  //   });
  //   gsap.from(this.info.nativeElement, {
  //     duration:0.5,
  //     opacity: 0,
  //     x: -15,
  //     stagger: 0.2,
  //     delay: 0.5
  //   });
  //   gsap.from(this.call.nativeElement, {
  //     duration:0.5,
  //     opacity: 0,
  //     x: -15,
  //     delay: 0.7
  //   });

  // }

// ngAfterViewInit(){
//   console.log("asdf")
//   if (this.router.isActive(this.router.url, {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'})){
//     this.ui.openState.next('open');
//   }
// }

// goBack(){
//   this.router.navigateByUrl('listings');
//   this.ui.openState.next('closed');
// }

// onChangeEntered(searchValue: any){
//   this.product2=searchValue;
//   console.log("asd")
// }




}
