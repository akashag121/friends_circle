import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllFriendsResp } from 'src/app/models/getAllFriendsByUserIdRespModel';
import { getAllFriendsWithImgUrlResp } from 'src/app/models/getAllFriendsByUserIdRespWithImgUrlModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-pendingrequests',
  templateUrl: './pendingrequests.component.html',
  styleUrls: ['./pendingrequests.component.scss']
})
export class PendingrequestsComponent {
  currentUserId: any = '';
  currentUserPendingFriendRequests: getAllFriendsResp[] = [];

  currentUserPendingFriendRequestsWithImgUrl: getAllFriendsWithImgUrlResp[] = [];


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

  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar) {
    this.currentUserId = localStorage.getItem('currentuserid');

    this._callapi.getAllPendingFriendRequestsByUserId(this.currentUserId).subscribe((d) => {
      console.log('pending friends requests got ', d)
      this.currentUserPendingFriendRequests = d;
      //To DO
      this.currentUserPendingFriendRequests.forEach((friend) => {
        if (friend.friendId == '' || friend.friendId === null) {
          friend.friendId = '32';
        }
        this._callapi.getImageFromDB(friend.friendId).subscribe((g) => {
          let friendImageUrl = URL.createObjectURL(g);
          let resp = new getAllFriendsWithImgUrlResp();
          resp.friendId = friend.friendId;
          resp.friendName = friend.friendName;
          resp.friendImageId = friend.friendImageId;
          resp.friendImageUrl = friendImageUrl;

          this.currentUserPendingFriendRequestsWithImgUrl.push(resp);


        })
      })

      console.log('final hassh', this.currentUserPendingFriendRequestsWithImgUrl)



    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })
  }
}
