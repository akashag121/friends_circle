import { Component, ComponentFactoryResolver, ComponentRef, Input, ViewContainerRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { getAllFriendsResp } from 'src/app/models/getAllFriendsByUserIdRespModel';
import { CallapiService } from 'src/app/services/callapi.service';
import { VisitorComponent } from '../visitor/visitor.component';
import { getAllFriendsWithImgUrlResp } from 'src/app/models/getAllFriendsByUserIdRespWithImgUrlModel';

@Component({
  selector: 'app-vfriends',
  templateUrl: './vfriends.component.html',
  styleUrls: ['./vfriends.component.scss']
})
export class VfriendsComponent {
  currentuser = localStorage.getItem('currentuser');



  currentUserId: string = 'ff1';
  currentFriendFriendsList: getAllFriendsResp[] = [];
  currentFriendFriendsListWithImgUrl:getAllFriendsWithImgUrlResp[] = [];

  currentUserFirstName: string = "";
  currentUserLastName: string = "";
  currentUserPhotoId: string = "";
  currentUserImageUrl: string = "";

  allFriendsCount: number = 0;
  totalPostCount: number = 0;

  postImageUrlArray: Array<string> = [];

  isLoading: boolean = false;

  friendId: any;



  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar, private route: ActivatedRoute,
    private router: Router) {
    this.friendId = this.route.snapshot.paramMap.get('friendId');

    console.log('friendId in vfriends' + this.friendId)

    this._callapi.getAllFriendsByUserId(this.friendId).subscribe((d) => {
      console.log('friends list got ', d)
      this.currentFriendFriendsList = d;
  //To DO
      this.currentFriendFriendsList.forEach((friend)=>{
        if (friend.friendId == '' || friend.friendId === null) {
          friend.friendId = '32';
        }
        this._callapi.getImageFromDB(friend.friendImageId).subscribe((g)=>{
           let friendImageUrl = URL.createObjectURL(g);
          let resp = new getAllFriendsWithImgUrlResp();
          resp.friendId = friend.friendId;
          resp.friendImageId = friend.friendImageId;
          resp.friendName = friend.friendName;
          resp.friendImageUrl = friendImageUrl;
 
          this.currentFriendFriendsListWithImgUrl.push(resp);


        })
      })

      console.log('final hassh',this.currentFriendFriendsListWithImgUrl)


    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })
  }

  unfriendAFriend(friendId: string) {
    console.log('Unfriend A friend request call made' + friendId)
    this._callapi.unfriendAFriend(this.currentUserId, friendId).subscribe((d) => {
      this._snackbar.open("Unfriend Request Successful", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    }, (e) => {
      this._snackbar.open("Something Went Wrong!", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
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


  visitProfile(friendId: string) {

    // // Clear the container.
    // this.alertContainer.clear();
    // // Create a factory for MessageComponent.
    // const factory = this.resolver.resolveComponentFactory(VisitorComponent);
    // // Create a component using the factory.
    // this.componentRef = this.alertContainer.createComponent(factory);
    // this.componentRef.destroy();


    console.log('visit profile clicked', friendId)
    this.router.navigateByUrl('/visitor/' + friendId)
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
}
