import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap, switchMap, tap } from 'rxjs';;
import { ProfileUser } from 'app/models/user';
import { ImageUploadService } from 'app/services/image-upload.service';
import { UsersService } from 'app/services/user-services.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { Firestore , collection, where, query, getDocs, doc, limit} from '@angular/fire/firestore';

import { LoginComponent } from 'app/login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  user$ = this.authService.currentUser$;
  public data:any=[]
  public cu:any;
  constructor(private authService: AuthenticationService,
    private firestore:Firestore 
    ) {
   
  }
  email = localStorage.getItem('what');
  ngOnInit(): void {
    
    this.getCurrentUser(this.email)
  }
  async getCurrentUser(email:any) {
    

    const cuRef = collection(this.firestore, 'users')
    const q = query(cuRef, where("email", "==", email), limit(1))
    const querySnapshot = await getDocs(q).then((response) => {
      this.cu= [...response.docs.map((item) =>{
        return {...item.data(), id: item.id}
      })]
      
     })
   
    

    
  }

  
 
}
