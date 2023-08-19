import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllPostsResponseWithImgUrl } from 'src/app/models/getAllPostResponseWithImgUrl';
import { getAllPostsResponse } from 'src/app/models/getAllPostsRespModel';
import { likeResponse } from 'src/app/models/likeResponse';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  @Output() myEvent = new EventEmitter<getAllPostsResponseWithImgUrl>();
  @Output() SeeAllLikesEvent = new EventEmitter<string>();
  @Output() SeeAllCommentsEvent = new EventEmitter<string>();
  @Output() addNewPostEvent = new EventEmitter<boolean>();

  @Input() likeOrCommentChanged: boolean = false;
  AllPosts: getAllPostsResponse[] = [];
  AllPostsWithImgUrl:getAllPostsResponseWithImgUrl[] = [];
  currentUserId: any = '';
  currentuserfullname: any = '';
  // changeLikeEvent: any;

  likeResp: likeResponse={
    likes:[]
  };

  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar) { 
    this.currentuserfullname = localStorage.getItem('currentuserfullname');

  }


  containsName( str:any): boolean {
    str.replace('/\\"/g', '\\');
    const dataObject = JSON.parse(str);
    return dataObject.likes.includes(this.currentuserfullname);
  }

  likeClicked(postId:string){
    // console.log("like cliecked "+post.like)
    // this.changeLikeEvent = true;
    const currentPostId = postId;
    this._callapi.getLikesByPostId(currentPostId.toString()).subscribe((d)=>{
      this.likeResp = d;
      console.log('first get likes response', this.likeResp)
      let isUserPresent = this.likeResp.likes.includes(this.currentuserfullname);
      console.log('is user present response', isUserPresent)
      if(isUserPresent){
        //remove user
  
        let i  = this.likeResp.likes.indexOf(this.currentuserfullname);
        this.likeResp.likes.splice(i, 1);
        this._callapi.setLikesByPostId(currentPostId.toString(),this.likeResp ).subscribe((d)=>{
          console.log('Like is Removed')
          
        })
      }
      else{
        //add user
        // console.log('before', this.likeResp)
        this.likeResp.likes.push(this.currentuserfullname);
        // console.log('after', this.likeResp)
        this._callapi.setLikesByPostId(currentPostId.toString(),this.likeResp ).subscribe((d)=>{
          console.log('Like is Added')
        })
      }
    })

  }


  setComment(post:getAllPostsResponseWithImgUrl){
    console.log('comment button clicked' ,post)
    this.myEvent.emit(post);

  }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('currentuserid');

    this._callapi.getAllPostsByUserIds(this.currentUserId).subscribe((d)=>{
      console.log(d)
      this.AllPosts = d;
      //To DO
      this.AllPosts.forEach((post)=>{

        if(post.postImageId === '' || post.postImageId === null){
          let resp = new getAllPostsResponseWithImgUrl();
          resp.userId = post.userId;
          resp.comments = post.comments;
          resp.createdDate = post.createdDate;
          resp.like = post.like;
          resp.postCaption = post.postCaption;
          resp.postId = post.postId.toString();
          resp.postImageId = post.postImageId;
          resp.postImageUrl = "";
          resp.userName = post.userName;

          this.AllPostsWithImgUrl.push(resp);
        }
        else{
        this._callapi.getImageFromDB(post.postImageId).subscribe((g)=>{
           let postImageUrl = URL.createObjectURL(g);
          let resp = new getAllPostsResponseWithImgUrl();
          resp.userId = post.userId;
          resp.comments = post.comments;
          resp.createdDate = post.createdDate;
          resp.like = post.like;
          resp.postCaption = post.postCaption;
          resp.postId = post.postId.toString();
          resp.postImageId = post.postImageId;
          resp.postImageUrl = postImageUrl;
          resp.userName = post.userName;

          this.AllPostsWithImgUrl.push(resp);


        })
      }
      })

      console.log('final hassh',this.AllPostsWithImgUrl)

    }, (e)=>{
      this._snackbar.open("Error in fetching data",'',
      {
        duration: 3000,
        verticalPosition:'bottom',
        horizontalPosition:'right'
      }
      )
    })
   
  }
  topVal = 0;
  onScroll(e: any) {
   
  }
  sideBarScroll() {
   
  }

  seeAllLikes(postId:string){
    this.SeeAllLikesEvent.emit(postId);
  }

  seeAllComments(postId:string){
    this.SeeAllCommentsEvent.emit(postId);
  }

  addNewPost(){
    console.log('add new post is called')
    this.addNewPostEvent.emit(true);
  }

  postImageUrl:string='';
  getImageFromDB(imageId:string){
  
    console.log('getImageFromDB method called', imageId)
    this._callapi.getImageFromDB(imageId).subscribe((d)=>{
      console.log('response from image db', d);
      this.postImageUrl = URL.createObjectURL(d);
    })
    return this.postImageUrl;
    // return 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  }
 
}
