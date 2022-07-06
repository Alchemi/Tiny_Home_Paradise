import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit(value:any){
    if(value.password !== value.confirmPassword){
      return (alert("Passwords must match!!"));
    }
    console.log(value)
     this.authService.addUser(value)
     this.authService.signup(value.email, value.password).subscribe(()=>{
      alert("User successfully registered")
      this.router.navigate(['']);
    })
    

  }
}
