import { Injectable } from '@angular/core';
import { Firestore, collection, doc, addDoc, getDocs } from '@angular/fire/firestore';

import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : Firestore) { }

  // add property
  addProduct(value:any){
    const dbInstance = collection(this.afs, 'products');
    return addDoc(dbInstance, value);
  }


  getProperties() {
    return getDocs(collection(this.afs, 'products'));
 }
 
  // get all prodcuts
  // getAllProducts() {
  //   return collection(this.afs,'products').valueChanges();
  // }

  // const querySnapshot = await getDocs(collection(this.afs, "products"));

  // this.afs.collection("products").get().then(function (querySnapshot) { querySnapshot.forEach(function(doc) { console.log(doc.id, " => ", doc.data());});});

  //delete a product
  // deleteProduct(product : Product){
  //   return doc(this.afs, 'products' +product.id).delete();
  // }

  // update a property
  // updateProduct(product : Product){
  //   this.deleteProduct(product);
  //   this.addProduct(product);
  // }
}