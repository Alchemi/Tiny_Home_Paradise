import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { LoginComponent } from './components/login/login.component';
 import { RegisterComponent } from './components/register/register.component';  */
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
/*  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }  */

=======
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

