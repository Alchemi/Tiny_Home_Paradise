import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  

  constructor() { }

  product!: Product; 

  ngOnInit(): void {
  }

}
