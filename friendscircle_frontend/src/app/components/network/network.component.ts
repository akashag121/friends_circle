import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllFriendsResp } from 'src/app/models/getAllFriendsByUserIdRespModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {



 

  

  ngOnInit(): void {
    // this.isLoading = true;
    // this._networkserv.getUserByUserId().subscribe((d)=>{
    //   this.currentUserFirstName =  d.firstName;
    //   this.currentUserLastName = d.lastName;
    //   this.currentUserPhotoId = d.photoId;
    //   this.imageDownloadCurrentUser(this.currentUserPhotoId);
    // })


    // this._networserv.getAllUsers().subscribe((d)=>{
    //   this.isLoading = true;
    //   console.log('All registered users are ', d);
    //   this.allUsersData = d;
    //   this.isLoading = false;

    // })

    // const currentuser = localStorage.getItem('currentuser');
    // this._networserv.getAllFriendRequests().subscribe((d)=>{
      
    //   this.allFriendReqData = d.filter(req => (req.friendId===currentuser && req.status==='Request Pending'));
    //   console.log('All Friend Requests are ', this.allFriendReqData);
    //   this.allFriendsCount = d.filter(req => ((req.friendId===currentuser || req.userId===currentuser) && req.status==='You are friend')).length;

    // })

    // this._postservice.findPostByUserId().subscribe((d) => {
    //   this.totalPostCount = d.length;
    //   this.isLoading = false;

    // })



  }


  reloadComponent() {
    // const currentRoute = this.router.url;
    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.router.navigateByUrl(currentRoute);
    // });
  }

  sendFriendRequest(friendId:string){
    // this.isLoading = true;
    // this._networserv.makeFriendRequest(friendId).subscribe((d)=>{
    //   console.log('create friend request response ', d);
    //   this.friendRequestSent = true;
    //   this.reloadComponent();
    //   this.isLoading = false;

    // })
  }

  acceptFriendRequest(friendReqId:string, userId:string){
    // this.isLoading = true;
    // this._networserv.acceptFriendRequest(friendReqId,userId).subscribe((d)=>{
    //   console.log('create friend request response ', d);
    //   this.friendRequestSent = true;
    //   this.reloadComponent()
    //   this.isLoading = false;

    // })


    // this._networserv.getAllUsers().subscribe((d)=>{
    //   console.log('All registered users are ', d);
    //   this.allUsersData = d;
    // })

    // const currentuser = localStorage.getItem('currentuser');
    // this._networserv.getAllFriendRequests().subscribe((d)=>{
      
    //   this.allFriendReqData = d.filter(req => (req.friendId===currentuser && req.status==='Request Pending'));
    //   console.log('All Friend Requests are ', this.allFriendReqData);
    // })
  }


  imageDownloadCurrentUser(postImageId: string) {
    // // console.log('Image download is called', postImageId);
    // if (postImageId) {
    //   this._postservice.getImage(postImageId).subscribe((d) => {
    //     this.currentUserImageUrl = URL.createObjectURL(d);
      
    //   })
    // }
  }
}
