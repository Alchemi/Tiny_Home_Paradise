import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],encapsulation: ViewEncapsulation.ShadowDom
})
export class PropertyDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
