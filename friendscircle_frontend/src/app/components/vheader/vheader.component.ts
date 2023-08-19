import { Component, Input, OnInit } from '@angular/core';
import { UserByUserId } from 'src/app/models/findUserByUserIdModel';

@Component({
  selector: 'app-vheader',
  templateUrl: './vheader.component.html',
  styleUrls: ['./vheader.component.scss']
})
export class VheaderComponent implements OnInit{
  @Input() friendId:string | undefined;
  friendsLink:string | undefined;
  timelineLink:string | undefined;

  constructor(){
  }

  ngOnInit(): void {
    console.log('friendId in vheader'+ this.friendId)
    this.friendsLink = '/visitor/'+ this.friendId + '/friends/' + this.friendId
    this.timelineLink = '/visitor/'+ this.friendId + '/timeline/' + this.friendId



  }
}
