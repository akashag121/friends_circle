import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit{

@Input() cufullname = '';
@Input() cudescription = '';
@Input() cupostcount = '';
@Input() cufriendscount = '';
@Input() cuimageid:any;
cuImageUrl:string='';

constructor(private _callapi:CallapiService){

}
ngOnInit(): void {
  console.log('current user image id in leftsidebar ',this.cuimageid)
  this.getImageFromDB(this.cuimageid);
}

getImageFromDB(imageId:string){
  console.log('getImageFromDB method called', imageId)
  if(imageId === null || imageId === ''){
    imageId = '32';
  }
  this._callapi.getImageFromDB(imageId).subscribe((d)=>{
    console.log('response from image db', d);
    this.cuImageUrl = URL.createObjectURL(d);
  })
}

}
