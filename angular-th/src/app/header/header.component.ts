import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public authService: AuthenticationService, private router:Router){}

  
  ngOnInit(): void {
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      localStorage.removeItem('what')
      this.router.navigate(['']);
    });}

}
