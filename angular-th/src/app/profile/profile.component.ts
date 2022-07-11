import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, tap } from 'rxjs';

import { ProfileUser } from 'app/models/user';
import { ImageUploadService } from 'app/services/image-upload.service';

import { UsersService } from '../services/user-services.service';
import { AuthenticationService } from 'app/services/authentication.service';
@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //user$ = this.usersService.currentUserProfile$;
  
  newUser={
    email:String,
    firstName:String,
    lastName:String,
    imageURL:String,
    phone:String,
    username:String,
    zipcode:String
  }

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    
  ) {}

  ngOnInit(): void {
    // this.usersService.currentUserProfile$
    //   .pipe(untilDestroyed(this), tap(console.log))
    //   .subscribe((user) => {
    //     this.profileForm.patchValue({ ...user });
    //   });
  }

  // uploadFile(event: any, { uid }: ProfileUser) {
  //   this.imageUploadService
  //     .uploadImage(event.target.files[0], `images/profile/${uid}`)
  //     .pipe(
  //       this.toast.observe({
  //         loading: 'Uploading profile image...',
  //         success: 'Image uploaded successfully',
  //         error: 'There was an error in uploading the image',
  //       }),
  //       switchMap((photoURL) =>
  //         this.usersService.updateUser({
  //           uid,
  //           photoURL,
  //         })
  //       )
  //     )
  //     .subscribe();
  // }

  // saveProfile() {
  //   const profileData = this.profileForm.value;
  //   this.usersService
  //     .updateUser(profileData)
  //     .pipe(
  //       this.toast.observe({
  //         loading: 'Saving profile data...',
  //         success: 'Profile updated successfully',
  //         error: 'There was an error in updating the profile',
  //       })
  //     )
  //     .subscribe();
  //}
}