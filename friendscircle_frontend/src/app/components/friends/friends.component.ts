import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getAllFriendsResp } from 'src/app/models/getAllFriendsByUserIdRespModel';
import { getAllFriendsWithImgUrlResp } from 'src/app/models/getAllFriendsByUserIdRespWithImgUrlModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  currentuser = localStorage.getItem('currentuser');

  currentUserId:any = '';
  currentUserFriends: getAllFriendsResp[] = [];
  currentUserFriendsImgUrl:getAllFriendsWithImgUrlResp[] = [];

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
    
    this._callapi.getAllFriendsByUserId(this.currentUserId).subscribe((d)=>{
      console.log('friends list got ', d)
      this.currentUserFriends=d;
      //To DO
      this.currentUserFriends.forEach((friend)=>{
        if(friend.friendImageId == '' || friend.friendImageId === null ){
          friend.friendImageId = '32';
        }
        this._callapi.getImageFromDB(friend.friendImageId).subscribe((g)=>{
           let friendImageUrl = URL.createObjectURL(g);
          let resp = new getAllFriendsWithImgUrlResp();
          resp.friendId = friend.friendId;
          resp.friendImageId = friend.friendImageId;
          resp.friendName = friend.friendName;
          resp.friendImageUrl = friendImageUrl;
 
          this.currentUserFriendsImgUrl.push(resp);


        })
      })

      console.log('final hassh',this.currentUserFriendsImgUrl)


    },(e)=>{
      this._snackbar.open("Error in fetching data",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      })
    })
   }

   unfriendAFriend(friendId:string){
    console.log('Unfriend A friend request call made'+ friendId)
    this._callapi.unfriendAFriend(this.currentUserId, friendId).subscribe((d)=>{
      this._snackbar.open("Unfriend Request Successful",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      })
      this.reloadComponent();

    },(e)=>{
      this._snackbar.open("Something Went Wrong!",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      })
    })
  }


   allFriendsUserData: any = [
    {
      firstName: "aman",
      lastName: "agarwal"
    }
  ];
  // friends = ['friend1', 'friend2', 'friend3', 'friend4']

  visitProfile(friendId:string){
    console.log('visit profile clicked', friendId)
    this.router.navigateByUrl('/visitor/'+ friendId)
  }

  ngOnInit(): void {


  }

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

  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentRoute);
    });
  }
}
