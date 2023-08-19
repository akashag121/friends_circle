import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { pplYouMayKnowResponse } from 'src/app/models/getAllPplUMayKnowModel';
import { pplYouMayKnowResponseWithImgUrl } from 'src/app/models/getAllPplUMayKnowWithImgUrlModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-peopleumaynow',
  templateUrl: './peopleumaynow.component.html',
  styleUrls: ['./peopleumaynow.component.scss']
})
export class PeopleumaynowComponent {
  currentUserName: any = '';
  currentUserImageId: any = '';
  peopleYouMayKnowList: pplYouMayKnowResponse[] = [];
  peopleYouMayKnowListWithImgUrl: pplYouMayKnowResponseWithImgUrl[] = [];

  allUsersData: any[] = [];
  friendRequestSent = false;
  allFriendReqData: any[] = [];
  allFriendsCount: number = 0;
  totalPostCount: number = 0;

  isLoading: boolean = false;
  currentUserId: any = '';



  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar, private router:Router) {

    this.currentUserId = localStorage.getItem('currentuserid');
    this.currentUserName = localStorage.getItem('currentuserfullname');
    this.currentUserImageId = localStorage.getItem('currentuserimageid');


    this._callapi.getAllPeopleYouMayKnowByUserId(this.currentUserId).subscribe((d) => {
      console.log('People you may know got ', d)
      this.peopleYouMayKnowList = d;
        //To DO
        this.peopleYouMayKnowList.forEach((user)=>{
          if(user.userImageId == '' || user.userImageId === null ){
            user.userImageId = '32';
          }
          this._callapi.getImageFromDB(user.userImageId).subscribe((g)=>{
             let userImageUrl = URL.createObjectURL(g);
            let resp = new pplYouMayKnowResponseWithImgUrl();
            resp.userId = user.userId;
            resp.userImageId = user.userImageId;
            resp.userName = user.userName;
            resp.userImageUrl = userImageUrl;
   
            this.peopleYouMayKnowListWithImgUrl.push(resp);
  
  
          })
        })
  
        console.log('final hassh',this.peopleYouMayKnowListWithImgUrl)
  


    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })
  }

  addNewFriendRequest(user: pplYouMayKnowResponse) {
    console.log(user)
    this._callapi.addNewFriendRequest(this.currentUserId, this.currentUserName, this.currentUserImageId, user.userId, user.userName, user.userImageId)
    .subscribe((d)=>{
      this._snackbar.open("Friend Request Sent!",'',
      {
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'bottom'
      })

      this.reloadComponent()

    }, (e)=>{
      this._snackbar.open("Something went Wrong!",'',
      {
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'bottom'
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
