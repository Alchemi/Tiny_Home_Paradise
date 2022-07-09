import { Component, OnInit } from '@angular/core';
import { propertiesList } from 'app/helpers/propertiesList';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  propertiesList = propertiesList;

  constructor() { }

  ngOnInit(): void {
  }

}
