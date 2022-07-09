import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from 'app/model/product';
import { menuList } from 'app/helpers/menuList';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  menuList = menuList;

  productList : Product [] = [];
  productObj: Product ={
    id: '',
    house_name: '',
    location: '',
    rooms: 0,
    baths: 0,
    price: 0,
    size: 0,
    year: 0,
    mobile: true
  };
  id : string ='';
  house_name: string = '';
    location: string = '';
    rooms : number = 0;
    baths: number = 0;
    price: number = 0;
    size: number = 0;
    year: number = 0;
    mobile: boolean=true;

  constructor(private data : DataService) { }

  ngOnInit(): void {
  }

  getAllProducts() {
    this.data.getAllProducts().subscribe(res =>{
      
      this.productList = res.map((e: any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err =>{
      alert('Error while fetching product data')
    })
  }

  resetForm(){
    this.id= '',
    this.house_name= '';
    this.location= '';
    this.rooms= 0;
    this.baths= 0;
    this.price= 0;
    this.size= 0 ;
    this.year=2000;
    this.mobile=true;
  }

  addProduct() {
    if(this.house_name == '' || this.location == ''||this.rooms == null || this.baths == null|| this.price == null || this.size == null|| this.year == null || this.mobile == true){
      alert('Fill all input fields')
      return;
    }
    this.productObj.id='';
    this.productObj.house_name=this.house_name;
    this.productObj.location=this.location;
    this.productObj.rooms=this.rooms;
    this.productObj.baths=this.baths;
    this.productObj.price=this.price;
    this.productObj.size=this.size;
    this.productObj.year=this.year;
    this.productObj.mobile=this.mobile;

    this.data.addProduct(this.productObj);
    this.resetForm();
  }

  updateProduct(){


  }


  deleteProduct(product : Product){
    if(window.confirm('Are you sure you would like to delete' +product.house_name+' ?')){

    this.data.deleteProduct(product);
    }
  }
}