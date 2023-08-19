import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserByUserId } from 'src/app/models/findUserByUserIdModel';
import { UserByUserIdWithImgUrl } from 'src/app/models/findUserByUserIdWithImgUrlModel';
import { CallapiService } from 'src/app/services/callapi.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-blockedusers',
  templateUrl: './blockedusers.component.html',
  styleUrls: ['./blockedusers.component.scss']
})
export class BlockedusersComponent {
  currentuser = localStorage.getItem('currentuser');

  allInactiveUsersList:UserByUserId[]=[];
  allInactiveUsersListWithImgUrl: UserByUserIdWithImgUrl[]= [];
  currentUserId:any = '';


  currentUserFirstName: string = "";
  currentUserLastName: string = "";
  currentUserPhotoId: string = "";
  currentUserImageUrl: string = "";

  allFriendsCount: number = 0;
  totalPostCount: number = 0;

  postImageUrlArray: Array<string> = [];

  isLoading: boolean = false;


  constructor(private _callapi:CallapiService, private _snackbar:MatSnackBar, private router: Router) {
    this.currentUserId = localStorage.getItem('currentuserid');

   }

   ngOnInit(): void {
    
    this._callapi.getAllBlockedUsers().subscribe((d)=>{
      console.log('active users list got ', d)
      this.allInactiveUsersList=d;
      //To DO
      this.allInactiveUsersList.forEach((user)=>{
        this._callapi.getImageFromDB(user.imageId).subscribe((g)=>{
           let userImageUrl = URL.createObjectURL(g);
          let resp = new UserByUserIdWithImgUrl();
          resp.userId = user.userId;
          resp.fullName = user.fullName;
          resp.description = user.description;
          resp.imageId = user.imageId;
          resp.imageUrl = userImageUrl;
 
          this.allInactiveUsersListWithImgUrl.push(resp);


        })
      })

      console.log('final hassh',this.allInactiveUsersListWithImgUrl)


    },(e)=>{
      this._snackbar.open("Error in fetching data",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      })
    })

   }
   
   unblockUser(user:UserByUserIdWithImgUrl){
    console.log('blocked user clicked', user)
    this._callapi.unblockUserByUserId(user.userId.toString()).subscribe((d)=>{
      this._snackbar.open("User is unblocked",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      })
    },(e)=>{
      this._snackbar.open("Something Went Wrong!",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      })
    })
  }
  //  unfriendAFriend(friendId:string){
  //   console.log('Unfriend A friend request call made'+ friendId)
  //   this._callapi.unfriendAFriend(this.currentUserId, friendId).subscribe((d)=>{
  //     this._snackbar.open("Unfriend Request Successful",'',
  //     {
  //       duration: 3000,
  //       verticalPosition:'bottom',
  //       horizontalPosition:'right'
  //     })
  //   },(e)=>{
  //     this._snackbar.open("Something Went Wrong!",'',
  //     {
  //       duration: 3000,
  //       verticalPosition:'bottom',
  //       horizontalPosition:'right'
  //     })
  //   })
  // }


   allFriendsUserData: any = [
    {
      firstName: "aman",
      lastName: "agarwal"
    }
  ];
  // friends = ['friend1', 'friend2', 'friend3', 'friend4']

  // visitProfile(friendId:string){
  //   console.log('visit profile clicked', friendId)
  //   this.router.navigateByUrl('/visitor/'+ friendId)
  // }



  getUserNameFromUserId(friendUserId: string) {

  }

  postImageURL: string = "";
  imageDownload(postImageId: string) {
    // console.log('Image download is called for post ', postImageId);
    // if (postImageId) {
    //   this._postservice.getImage(postImageId).subscribe((d) => {
    //     this.postImageURL = URL.createObjectURL(d);
    //     console.log('post image url for post ', this.postImageURL);
    //     this.postImageUrlArray.push(this.postImageURL)
    //   })
    // }
  }

  imageDownloadCurrentUser(postImageId: string) {
    // console.log('Image download is called', postImageId);
    // if (postImageId) {
    //   this._postservice.getImage(postImageId).subscribe((d) => {
    //     this.currentUserImageUrl = URL.createObjectURL(d);

    //   })
    // }
  }
 }
