import { Component, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { getAllPostsResponseWithImgUrl } from 'src/app/models/getAllPostResponseWithImgUrl';
import { getAllPostsResponse } from 'src/app/models/getAllPostsRespModel';
import { CallapiService } from 'src/app/services/callapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  constructor(private _callapi: CallapiService, private router:Router){}
  postToBeCommented!: getAllPostsResponseWithImgUrl;
  IsCommentEnabled:boolean = false;
  IsCommentToWatchEnabled:boolean = false;
  IsLikeEnabled:boolean = false;
  likeOrCommentChanged:boolean= false;
  IsAddNewPostEnabled:boolean = false;
  IsAddNewStoryEnabled:boolean = false;


  postIdForSeeingAllLikes:string = '';
  postIdForSeeingAllComments:string= '';

  ngOnInit(): void {
    // this.post = this._callapi.post;
    // console.log('post in home',this.post)

    // if(this.post){
    //   this.IsCommentEnabled = true;
    // }
   
    // console.log('post in comments',this.post)
  }

  postComment(postToBeCommented:getAllPostsResponseWithImgUrl){
    console.log('post reached to home', postToBeCommented)
    this.postToBeCommented = postToBeCommented;
    this.IsLikeEnabled = false;
    this.IsCommentToWatchEnabled = false;
    this.IsCommentEnabled = true;

  }

  commentAdded(str:string){
    if(str === 'Comment is added')
    this.IsCommentEnabled = false;
    this.likeOrCommentChanged = true;
    this.reloadComponent();

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
 
  addNewPostEvent(addNewPost: boolean){
    console.log('add new post reached home')
    this.IsCommentEnabled = false;
    this.IsLikeEnabled = false;
    this.IsCommentToWatchEnabled = false;

    this.IsAddNewPostEnabled = true;
  }

  addNewStoryEvent(addNewStory: boolean){
    console.log('add new story reached home')
    this.IsAddNewStoryEnabled = true;
    console.log('thisIsAddNewStoryEnabled', this.IsAddNewStoryEnabled)
  }


  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentRoute);
    });
  }
}
