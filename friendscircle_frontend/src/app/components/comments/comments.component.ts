import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comm, commentResp } from 'src/app/models/commentResponse';
import { getAllPostsResponseWithImgUrl } from 'src/app/models/getAllPostResponseWithImgUrl';
import { getAllPostsResponse } from 'src/app/models/getAllPostsRespModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  constructor(private _callapi: CallapiService, private _snackbar:MatSnackBar){
    this.currentuserfullname = localStorage.getItem('currentuserfullname');

  }
  @Input() postToBeCommented!: getAllPostsResponseWithImgUrl;
  @Output() commentAdded = new EventEmitter<string>();
  commentData:string= '';
  getCommentResponse!: commentResp;
  currentuserfullname: any = '';

  // Commen: Comment = new Comment();
  ngOnInit(): void {
  }

  commentSubmit(){
    console.log('comment reached to submit', this.commentData)
    this._callapi.getCommentsByPostId(this.postToBeCommented.postId.toString()).subscribe((d)=>{
      this.getCommentResponse = d;
      console.log('get comment response ', this.getCommentResponse);
      let comm = new Comm();
      comm.attributeName= this.currentuserfullname;
      comm.attributeValue= this.commentData;
      console.log('comment is created', comm)
      this.getCommentResponse.comments.push(comm);

      this._callapi.setCommentsByPostId(this.postToBeCommented.postId.toString(), this.getCommentResponse).subscribe((d1)=>{
        console.log('Comment is Added')
        this._snackbar.open('Comment is added','',{
          duration:3000,
          horizontalPosition:'right',
          verticalPosition:'bottom'
        })
        this.commentAdded.emit('Comment is added')
      })
    })
  }

}
