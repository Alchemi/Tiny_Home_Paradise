import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  // add property
  addProduct(product : Product) {
    product.id = this.afs.createId();
    return this.afs.collection('/products').add(product);
  }

  // get all prodcuts
  getAllProducts() {
    return this.afs.collection('/products').snapshotChanges();
  }


  //delete a product
  deleteProduct(product : Product){
    return this.afs.doc('/products' +product.id).delete();
  }

  // update a property
  updateProduct(product : Product){
    this.deleteProduct(product);
    this.addProduct(product);
  }
}