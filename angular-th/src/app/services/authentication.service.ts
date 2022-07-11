import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';
import { doc, Firestore, addDoc, collection } from '@angular/fire/firestore';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import {
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { concatMap, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ =authState(this.auth);
 
  constructor( private auth: Auth, private firestore:Firestore) { }

  signup(email:string, password:string): Observable<UserCredential>{
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
  addUser(value:any){
    const dbInstance = collection(this.firestore, 'users');
    return addDoc(dbInstance, value);
  }
  login(email:string, password:string): Observable<any>{
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, googleAuthProvider);
  }
  logout(){
    return from(this.auth.signOut());
  }
  updateProfile(profileData: Partial<UserInfo>): Observable<any> {
       const user = this.auth.currentUser;
       return of(user).pipe(
         concatMap((user) => {
           if (!user) throw new Error('Not authenticated');
  
          return updateProfile(user, profileData);
         })
       );
     }
}
