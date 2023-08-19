import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getAllFriendsResp } from 'src/app/models/getAllFriendsByUserIdRespModel';
import { getAllFriendsWithImgUrlResp } from 'src/app/models/getAllFriendsByUserIdRespWithImgUrlModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-friendrequests',
  templateUrl: './friendrequests.component.html',
  styleUrls: ['./friendrequests.component.scss']
})
export class FriendrequestsComponent implements OnInit {
  currentUserId: any = '';
  currentUserFriendRequests: getAllFriendsResp[] = [];
  currentUserFriendRequestsWithImgUrl: getAllFriendsWithImgUrlResp[] = [];


  friends = ['friend1', 'friend2', 'friend3', 'friend4']
  allUsersData: any[] = [];
  friendRequestSent = false;
  allFriendReqData: any[] = [];
  allFriendsCount: number = 0;
  totalPostCount: number = 0;

  isLoading: boolean = false;


  currentUserFirstName: string = "";
  currentUserLastName: string = "";
  currentUserPhotoId: string = "";
  currentUserImageUrl: string = "";

  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar, private router:Router) {

  }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('currentuserid');

    this._callapi.getAllFriendRequestsByUserId(this.currentUserId).subscribe((d) => {
      console.log('friends requests got ', d)
      this.currentUserFriendRequests = d;
      //To DO
      this.currentUserFriendRequests.forEach((friend) => {
        if(friend.friendImageId == '' || friend.friendImageId === null ){
          friend.friendImageId = '32';
        }
        this._callapi.getImageFromDB(friend.friendId).subscribe((g) => {
          let friendImageUrl = URL.createObjectURL(g);
          let resp = new getAllFriendsWithImgUrlResp();
          resp.friendId = friend.friendId;
          resp.friendName = friend.friendName;
          resp.friendImageId = friend.friendImageId;
          resp.friendImageUrl = friendImageUrl;

          this.currentUserFriendRequestsWithImgUrl.push(resp);


        })
      })

      console.log('final hassh', this.currentUserFriendRequestsWithImgUrl)



    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })
  }
  acceptFriendRequest(friendId: string) {
    console.log('accept friend request call made' + friendId)
    this._callapi.acceptFriendRequest(this.currentUserId, friendId).subscribe((d) => {
      this._snackbar.open("Friend Request Accepted", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })

        this.reloadComponent();

    }, (e) => {
      this._snackbar.open("Something Went Wrong!", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })
  }

  deleteFriendRequest(friendId: string) {
    console.log('reject friend request call made' + friendId)
    this._callapi.rejectFriendRequest(this.currentUserId, friendId).subscribe((d) => {
      this._snackbar.open("Friend Request Deleted", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
        this.reloadComponent();

    }, (e) => {
      this._snackbar.open("Something Went Wrong!", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })
  }

  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentRoute);
    });
  }
}
