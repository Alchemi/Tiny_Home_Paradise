import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor( private authService: AuthenticationService, 
    private router:Router,
    private toast:HotToastService) { }

  
  ngOnInit(): void {
  }
  
  submit(value:any){
    
    console.log(value)
     this.authService.login(value.email, value.password).subscribe(()=>{
      this.router.navigate(['']);
    })
  }
}
