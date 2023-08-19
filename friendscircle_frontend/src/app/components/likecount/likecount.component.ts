import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { likeResponse } from 'src/app/models/likeResponse';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-likecount',
  templateUrl: './likecount.component.html',
  styleUrls: ['./likecount.component.scss']
})
export class LikecountComponent implements OnChanges{
  @Input() postId:string='';
  likesList: any;
  likesCount:number=0;

  // @Input() changeLikeEvent:boolean = false;
  constructor(private _callapi : CallapiService){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes)
    // console.log( 'change like event',this.changeLikeEvent);
    this._callapi.getLikesByPostId(this.postId).subscribe((d)=>{
        this.likesCount = d.likes.length;
        // this.likeResp = d;
        this.likesList =  d.likes;
        console.log('welcome   ',this.likesList , this.likesCount)
    })
    
  }

}
