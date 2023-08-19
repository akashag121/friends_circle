import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentuserdescription: any = '';
  currentuserfullname: any = '';
  currentuserpostcount: any = 0;
  currentuserfriendscount: any = 0;
  currentuserimageId: any;
  currentUserId: any = '';

  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar) {

    this.currentuserdescription = localStorage.getItem('currentuserdescription');
    this.currentuserfullname = localStorage.getItem('currentuserfullname');
    this.currentuserimageId = localStorage.getItem('currentuserimageid');
    this.currentUserId = localStorage.getItem('currentuserid');

    this._callapi.getAllPostsByUserId(this.currentUserId).subscribe((d) => {
      this.currentuserpostcount = d.length;

    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        }
      )
    })


    this._callapi.getAllFriendsByUserId(this.currentUserId).subscribe((d) => {
      console.log('friends list got ', d)
      this.currentuserfriendscount = d.length;
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
