import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { collection, Firestore, getDocs, limit, query, where } from '@angular/fire/firestore';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  

  constructor(private firestore:Firestore) { }

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
}}
