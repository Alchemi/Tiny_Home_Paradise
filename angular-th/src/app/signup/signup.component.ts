import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailAuthCredential } from '@firebase/auth';
import { catchError } from 'rxjs';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { __values } from 'tslib';
import { AuthenticationService } from '../services/authentication.service';
import { Firestore, collection, doc} from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msgError = "";
  newUser={
    email:String,
    firstName:String,
    lastName:String,
    password:String,
    phone:String,
    username:String,
    
    photoURL:String,
    address:String
  }

  constructor(private authService:AuthenticationService,
    private router: Router){}
    

  ngOnInit(): void {
  }
  
  submit(value:any){
    
    if(value.password !== value.confirmPassword){
      this.msgError="Passwords must match!! And be atleast 6 characters"
      return;
    }
    
    let newUser={
      email: value.email,
      firstName:value.firstName,
      lastName:value.lastName,
      password:value.password,
      phone:value.phone,
      username:value.username,
      address:value.address,
      photoUrl:value.photoURL
    }
   
     
     
     this.authService.signup(value.email, value.password).subscribe({
      next:(v)=>this.authService.addUser(newUser),
      error:(e)=>console.error(this.msgError="Verify information, email already registered!"),
      complete:()=> this.router.navigate([""])
      });
      
    }
    
  
   }
   
  

