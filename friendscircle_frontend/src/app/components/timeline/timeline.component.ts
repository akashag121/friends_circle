import { Component, OnInit } from '@angular/core';
import { getAllPostsResponseWithImgUrl } from 'src/app/models/getAllPostResponseWithImgUrl';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{

  postToBeCommented!: getAllPostsResponseWithImgUrl;

  currentUserId: any = '';
  IsCommentEnabled:boolean = false;
  IsCommentToWatchEnabled:boolean = false;
  IsLikeEnabled:boolean = false;
  likeOrCommentChanged:boolean= false;

  postIdForSeeingAllLikes:string = '';
  postIdForSeeingAllComments:string= '';
  constructor(){
    this.currentUserId = localStorage.getItem('currentuserid');

  }

  ngOnInit(): void {

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
    this.likeOrCommentChanged = true;
  }

  postComment(postToBeCommented:getAllPostsResponseWithImgUrl){
    console.log('post reached to home', postToBeCommented)
    this.postToBeCommented = postToBeCommented;
    this.IsLikeEnabled = false;
    this.IsCommentToWatchEnabled = false;
    this.IsCommentEnabled = true;

  }
}
