// import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { findUserCompleteData } from 'src/app/models/findIUserCompleteModel';
// import { CallapiService } from 'src/app/services/callapi.service';
// // import { NetworkService } from 'src/app/services/network.service';
// // import { PostsService } from 'src/app/services/posts.service';
// // import { getuserbyuseridresp } from 'src/models/getUserByUseridModel';
// // import { updatePassForm } from 'src/models/updatePassModel';

// @Component({
//   selector: 'app-setting',
//   templateUrl: './setting.component.html',
//   styleUrls: ['./setting.component.scss']
// })
// export class SettingComponent implements OnInit{
//   isLoading:boolean = false;
//   currentUserId: any = '';

//   constructor( private router: Router, private _callapi: CallapiService, private cdr:ChangeDetectorRef) { 
//     this.currentUserId = localStorage.getItem('currentuserid');

//   }

 

//   currentUserData!: findUserCompleteData;


//   ngOnInit(): void {
//     // this.isLoading = true;
//     this._callapi.findUserByUserIdCompleteData(this.currentUserId).subscribe((d) => {
//       this.currentUserData = d;
//       // this.isLoading = false;
//       console.log('current user data', this.currentUserData)
//     })
//   }

//   fullNameActive: boolean = true;
//   // lNameActive: boolean = true;
//   emailActive: boolean = true;
//   dobActive: boolean = true;
//   genderActive: boolean = true;
//   descriptionActive:boolean = true;
//   passwordActive:boolean = true;
//   imageActive: boolean = true;

//   currentUserImageId: string = "";
//   updatedValue = "";

//   // reloadComponent() {
//   //   const currentRoute = this.router.url;
//   //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
//   //     this.router.navigateByUrl(currentRoute);
//   //   });
//   // }

//   updateFullName(fullNameOld: string) {
//     console.log('fullNameOld', fullNameOld)
//     this.updatedValue = fullNameOld;
//     // this.lNameActive = true;
//     this.emailActive = true;
//     this.dobActive = true;
//     this.genderActive = true;
//     this.fullNameActive = false;
//     this.imageActive = true;
//   }

//   updateFNameNew() {
//     // this.isLoading = true;
//     this._networkserv.updateUser({ "firstName": this.updatedValue }).subscribe((d) => {
//       console.log(d)
//       // this._networkserv.getUserByUserId().subscribe((d) => {
//       //   this.currentUserData = d;
//       //   console.log('current user data', this.currentUserData)
//       // })
//       this.isLoading = false;
//       this.reloadComponent()
//     })
//   }

//   updateLName(lNameOld: string) {
//     console.log('lNameOld', lNameOld)
//     this.updatedValue = lNameOld;
//     this.lNameActive = false;
//     this.emailActive = true;
//     this.dobActive = true;
//     this.genderActive = true;
//     this.fNameActive = true;
//     this.imageActive = true;
//   }

//   updateLNameNew() {
//     this.isLoading = true;
//     this._networkserv.updateUser({ "lastName": this.updatedValue }).subscribe((d) => {
//       console.log(d)
//       // this._networkserv.getUserByUserId().subscribe((d) => {
//       //   this.currentUserData = d;
//       //   console.log('current user data', this.currentUserData)
//       // })
//       this.isLoading = false;
//       this.reloadComponent()
//     })
//   }

//   updateEmail(emailOld: string) {
//     console.log('emailOld', emailOld)
//     this.updatedValue = emailOld;
//     this.lNameActive = true;
//     this.emailActive = false;
//     this.dobActive = true;
//     this.genderActive = true;
//     this.fNameActive = true;
//     this.imageActive = true;
//   }

//   updateEmailNew() {
//     this.isLoading = true;
//     this._networkserv.updateUser({ "email": this.updatedValue }).subscribe((d) => {
//       console.log(d)
//       // this._networkserv.getUserByUserId().subscribe((d) => {
//       //   this.currentUserData = d;
//       //   console.log('current user data', this.currentUserData)
//       // })
//       this.isLoading = false;
//       this.reloadComponent()

//     })
//   }

//   updateDob(dobOld: string) {
//     console.log('dobOld', dobOld)
//     this.updatedValue = dobOld;
//     this.lNameActive = true;
//     this.emailActive = true;
//     this.dobActive = false;
//     this.genderActive = true;
//     this.fNameActive = true;
//     this.imageActive = true;

//   }

//   updateDobNew() {
//     this.isLoading = true;
//     this._networkserv.updateUser({ "dob": this.updatedValue }).subscribe((d) => {
//       console.log(d)
//       // this._networkserv.getUserByUserId().subscribe((d) => {
//       //   this.currentUserData = d;
//       //   console.log('current user data', this.currentUserData)
//       // })
//       this.isLoading = false;
//       this.reloadComponent()

//     })
//   }

//   updateGender(genderOld: string) {
//     console.log('genderOld', genderOld)
//     this.updatedValue = genderOld;
//     this.lNameActive = true;
//     this.emailActive = true;
//     this.dobActive = true;
//     this.genderActive = false;
//     this.fNameActive = true;
//     this.imageActive = true;
//   }

//   updateGenderNew() {
//     this.isLoading = true;
//     this._networkserv.updateUser({ "gender": this.updatedValue }).subscribe((d) => {
//       console.log(d)
//       // this._networkserv.getUserByUserId().subscribe((d) => {
//       //   this.currentUserData = d;
//       //   console.log('current user data', this.currentUserData)
//       // })
//       this.isLoading = false;
//       this.reloadComponent()

//     })
//   }


//   //Settings for password change
//   updatepassform: updatePassForm = {
//     "password": ""
//   }
//   obj: any = {
//     "confirmpassword": ""
//   }

//   updatePasswordSubmit() {
//     console.log("button is clicked")
//     this.isLoading = true;
//     this._callapi.updateUserPassword(this.updatepassform).subscribe((d: any) => {
//       if (d) {
//         console.log('User password has been changed');

//         this.isLoading = false;
//         this.router.navigateByUrl('login');
//       }
//       else {
//         console.log('User password has not been changed');
//         this.isLoading = false;
//         this.router.navigateByUrl('login');
//       }

//     })
//   }

//   onImageChange(event: any) {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       const formData = new FormData();
//       formData.append('picture', file);
//       this._postserv.uploadImage(formData).subscribe((d) => {
//         console.log('Response from upload image', d);
//         this.currentUserImageId = d.uploadId;
//         console.log('current user image id', this.currentUserImageId);
//         // this.data.postImageId = this.postImageId;
//       })
//     }
//   }

//   updateProfileImage(imageIdOld:string){
//     console.log('Old Image Id is ', imageIdOld)
//     this.lNameActive = true;
//     this.emailActive = true;
//     this.dobActive = true;
//     this.genderActive = true;
//     this.fNameActive = true;
//     this.imageActive = false;
//   }

//   updateImageNew() {
//     this.isLoading = true;
//     this._networkserv.updateUser({ "photoId": this.currentUserImageId }).subscribe((d) => {
//       console.log(d)
//       // this._networkserv.getUserByUserId().subscribe((d) => {
//       //   this.currentUserData = d;
//       //   console.log('current user data', this.currentUserData)
//       // })
//       console.log('User image has been updated')
//       this.isLoading = false;
//       this.reloadComponent()

//     })
//   }
// }
