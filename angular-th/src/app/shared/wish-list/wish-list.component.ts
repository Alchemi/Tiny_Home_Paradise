import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'app/model/product';
import { WishListService } from 'app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'], encapsulation:ViewEncapsulation.ShadowDom
})
export class WishListComponent implements OnInit {

  prodL: Product[] =[];

  constructor(private wishListService:WishListService) { }


  removeItem(item: any){
    this.wishListService.removeWishListItem(item);
    
}
  ngOnInit(): void {
  }

}
