import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAllPostsResponseWithImgUrl } from 'src/app/models/getAllPostResponseWithImgUrl';

@Component({
  selector: 'app-vtimeline',
  templateUrl: './vtimeline.component.html',
  styleUrls: ['./vtimeline.component.scss']
})
export class VtimelineComponent {
  // userId:string='user111';
  // @Input() friendId:string = '';
  userId:any;
  postToBeCommented!: getAllPostsResponseWithImgUrl;

  IsCommentEnabled:boolean = false;
  IsCommentToWatchEnabled:boolean = false;
  IsLikeEnabled:boolean = false;
  // likeOrCommentChanged:boolean= false;

  postIdForSeeingAllLikes:string = '';
  postIdForSeeingAllComments:string= '';

  constructor(private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('friendId');
    console.log('friendId in vtimeline'+ this.userId)

  }

  SeeAllLikesEvent(postId:string){
    console.log('post id in home for see all likes', postId)
    this.IsCommentEnabled= false;
    this.IsCommentToWatchEnabled = false;
    this.IsLikeEnabled = true;
    this.postIdForSeeingAllLikes = postId;
  }

  SeeAllCommentsEvent(postId:string){
    console.log('post id in home for see all comments', postId)
    this.IsLikeEnabled = false;
    this.IsCommentEnabled= false;
    this.IsCommentToWatchEnabled = true;
    this.postIdForSeeingAllComments = postId;
  }

  commentAdded(str:string){
    if(str === 'Comment is added')
    this.IsCommentEnabled = false;
    // this.likeOrCommentChanged = true;
  }

  postComment(postToBeCommented:getAllPostsResponseWithImgUrl){
    console.log('post reached to home', postToBeCommented)
    this.postToBeCommented = postToBeCommented;
    this.IsLikeEnabled = false;
    this.IsCommentToWatchEnabled = false;
    this.IsCommentEnabled = true;

  }
}
