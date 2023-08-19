import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserByUserId } from 'src/app/models/findUserByUserIdModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-vleftsidebar',
  templateUrl: './vleftsidebar.component.html',
  styleUrls: ['./vleftsidebar.component.scss']
})
export class VleftsidebarComponent implements OnInit {
  @Input() friendId: string = '';
  currentfriendpostcount: any = 0;
  currentfriendfriendscount: any = 0;

  currentFriendUser: UserByUserId = {
    userId: 0,
    fullName: '',
    description: '',
    imageId: ''
  };

  friendImageUrl: string = '';

  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar) {
    console.log('friendId in vsidebar constructor' + this.friendId)

  }

  ngOnInit(): void {
    console.log('friendId in vsidebar ngoninit' + this.friendId)
    this._callapi.findUserByUserId(this.friendId).subscribe((d) => {
      console.log("response in vleftsidebar", d)
      this.currentFriendUser = d;
      //for gettign image url
      if(this.currentFriendUser.imageId === null || this.currentFriendUser.imageId === ''){
        this.currentFriendUser.imageId = '32';
      }
      this._callapi.getImageFromDB(this.currentFriendUser.imageId).subscribe((g) => {
        console.log('response got from getImageUUrl')
        this.friendImageUrl = URL.createObjectURL(g);
        console.log(this.friendImageUrl, "friendimageurl i")
      })
  

    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        }
      )
    })


    this._callapi.getAllPostsByUserId(this.friendId).subscribe((d) => {
      this.currentfriendpostcount = d.length;

    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        }
      )
    })


    this._callapi.getAllFriendsByUserId(this.friendId).subscribe((d) => {
      console.log('friends list got ', d)
      this.currentfriendfriendscount = d.length;
    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        })
    })

    //To DO

  


  }
}
