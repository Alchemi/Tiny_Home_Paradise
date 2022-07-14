import {MatCheckboxModule} from '@angular/material/checkbox';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './shared/product/product.component';
import { ListingsComponent } from './shared/listings/listings.component';
import { PropertyDetailsComponent } from './shared/property-details/property-details.component';
import { AddPropertyComponent } from './shared/add-property/add-property.component';
import { WishListComponent } from './shared/wish-list/wish-list.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { SuccessComponent } from './pages/success/success.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'contact',
    component: ContactComponent

  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'product',
    component: ProductComponent
  },
  {
    path:'listings',
    component: ListingsComponent,
    ...canActivate(redirectToLogin)
  },
 {
  path:'success',
  component: SuccessComponent
 },

  {
    path: 'property-details',
    component: PropertyDetailsComponent,
    
    ...canActivate(redirectToLogin)
  },
  {
    path: 'wish-list',
    component: WishListComponent,
    ...canActivate(redirectToLogin)
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

