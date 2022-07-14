import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  public wishItemList! : any[]
  public productList = new BehaviorSubject<any>([]);
  public product_List:any;
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addtoWishList(product : any){
    this.wishItemList.push(...product);
    this.productList.next(this.wishItemList);
    console.log(this.wishItemList)
  }

  removeWishListItem(product: any){
    this.wishItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishItemList.splice(index,1);
      }
    })
  }

  removeAllWishes(){
    this.wishItemList = []
    this.productList.next(this.wishItemList);
  }

}
