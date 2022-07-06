import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';
import { doc, Firestore, addDoc, collection } from '@angular/fire/firestore';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ =authState(this.auth);
 
  constructor( private auth: Auth, private firestore:Firestore) { }

  signup(email:any, password:any){
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
  addUser(value:any){
    const dbInstance = collection(this.firestore, 'users');
    return addDoc(dbInstance, value);
  }
  login(email:any, password:any){
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, googleAuthProvider);
  }
  logout(){
    return from(this.auth.signOut());
  }
}
