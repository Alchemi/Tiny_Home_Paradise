import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msgError ="";
 

  constructor( private authService: AuthenticationService, 
    private router:Router,
    ) { }

  
  ngOnInit(): void {
  }
  
  submit(value:any){
    
    console.log(value)
    
     this.authService.login(value.email, value.password).subscribe({
      next:(v)=>localStorage.setItem('what', value.email),
      error:(e)=>console.error(this.msgError="Email or password incorrect"),
      complete:()=> this.router.navigate([''])
      
      })
     
    
  }
  handleGoogleSignin(){
    this.authService.googleSignIn().then(()=>{
      this.router.navigate(['']);
    })
      
    
  }
}
