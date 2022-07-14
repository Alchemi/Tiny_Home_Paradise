import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/model/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

    newProduct ={
      house_name: String,
        location: String,
        imageUrl: String,
        rooms : Number,
        baths: Number,
        price: Number,
        size: Number,
        year: Number,
        mobility:String,
    }
  
    constructor(private data : DataService, private router : Router) { }
  
    ngOnInit(): void {
    }
  
    // getAllProducts() {
    //   this.data.getAllProducts().subscribe(res =>{
        
    //     this.productList = res.map((e: any) =>{
    //       const data = e.payload.doc.data();
    //       data.id = e.payload.doc.id;
    //       return data;
    //     })
  
    //   }, err =>{
    //     alert('Error while fetching product data')
    //   })
    // }
  
    // resetForm(){
    //   this.id= '',
    //   this.house_name= '';
    //   this.location= '';
    //   this.imageUrl='';
    //   this.rooms= 0;
    //   this.baths= 0;
    //   this.price= 0;
    //   this.size= 0 ;
    //   this.year=2000;
    //   this.mobility='';
    // }
  

    submit(value:any)
    {
      let newProduct = {
        propertyId: value.propertyId,
        house_name: value.house_name,
          location: value.location,
          imageUrl:value.image,
          rooms : value.rooms,
          baths: value.baths,
          price: value.price,
          size: value.size,
          year: value.year,
          mobility:value.mobility,
      }
      console.log(location);
      this.data.addProduct(newProduct).then(() => {
      alert("Property successfully registered");
      this.router.navigate(['/success']);
    })}
    
    updateProduct(){
  
  
    }
  
  
    // deleteProduct(product : Product){
    //   if(window.confirm('Are you sure you would like to delete' +product.house_name+' ?')){
  
    //   this.data.deleteProduct(product);
    //   }
    // }
  }