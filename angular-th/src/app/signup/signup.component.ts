import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser={
    email:String,
    firstName:String,
    lastName:String,
    password:String,
    phone:String,
    username:String,
    zipcode:String
  }

  constructor(private authService:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit(value:any){
    if(value.password !== value.confirmPassword){
      return (alert("Passwords must match!!"));
    }
    let newUser={
      email: value.email,
      firstName:value.firstName,
      lastName:value.lastName,
      password:value.password,
      phone:value.phone,
      username:value.username,
      zipcode:value.zipcode
    }
   
     
     
     this.authService.signup(value.email, value.password).subscribe(()=>{
      alert("User successfully registered");
      this.authService.addUser(newUser)
      this.router.navigate(['']);
    });
    
   

  }
}
