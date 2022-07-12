import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

import { Product } from 'app/model/product';
import { menuList } from 'app/helpers/menuList';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],encapsulation: ViewEncapsulation.ShadowDom
})


export class ProductComponent implements OnInit {

  menuList = menuList;

  constructor() { }

  ngOnInit(): void {
  }

  

}
