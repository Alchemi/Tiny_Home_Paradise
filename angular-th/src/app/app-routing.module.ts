import {MatCheckboxModule} from '@angular/material/checkbox';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './shared/product/product.component';
import { ListingsComponent } from './shared/listings/listings.component';
import { PropertyDetailsComponent } from './shared/property-details/property-details.component';


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
  }, 
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent

  },
  {
    path: 'profile', 
    component: ProfileComponent
  },
  {
    path:'product',
    component: ProductComponent
  },
  {
    path:'listings',
    component: ListingsComponent
  },
  {
    path: 'property-details/:id',
    component: PropertyDetailsComponent,
    outlet: 'd',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

