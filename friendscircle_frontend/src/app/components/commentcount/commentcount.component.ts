import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-commentcount',
  templateUrl: './commentcount.component.html',
  styleUrls: ['./commentcount.component.scss']
})
export class CommentcountComponent implements OnChanges{
  @Input() postId:string='';
  commentList: any;
  commentsCount:number=0;

  // @Input() changeLikeEvent:boolean = false;
  constructor(private _callapi : CallapiService){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes)
    // console.log( 'change like event',this.changeLikeEvent);
    this._callapi.getCommentsByPostId(this.postId).subscribe((d)=>{
        this.commentsCount = d.comments.length;
        this.commentList =  d.comments;
        console.log('welcome   ',this.commentList , this.commentsCount)
    })
    
  }
}
