import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllPostsResponseWithImgUrl } from 'src/app/models/getAllPostResponseWithImgUrl';
import { getAllPostsResponse } from 'src/app/models/getAllPostsRespModel';
import { likeResponse } from 'src/app/models/likeResponse';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-postsbyuserid',
  templateUrl: './postsbyuserid.component.html',
  styleUrls: ['./postsbyuserid.component.scss']
})
export class PostsbyuseridComponent {
  @Input() userId: string = '';
  @Output() SeeAllLikesEvent = new EventEmitter<string>();
  @Output() SeeAllCommentsEvent = new EventEmitter<string>();
  @Output() myEvent = new EventEmitter<getAllPostsResponseWithImgUrl>();


  AllPosts: getAllPostsResponse[] = [];
  AllPostsWithImgUrl:getAllPostsResponseWithImgUrl[] = [];
  currentuserfullname: any = '';


  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar) {
    this.currentuserfullname = localStorage.getItem('currentuserfullname');

  }

  likeResp: likeResponse={
    likes:[]
  };

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


  likeAPost(postId: string) {

  }

  ngOnInit(): void {


    this._callapi.getAllPostsByUserId(this.userId).subscribe((d) => {
      console.log(d)
      this.AllPosts = d;
      //To DO
      this.AllPosts.forEach((post) => {
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

        
        this._callapi.getImageFromDB(post.postImageId).subscribe((g) => {
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

      console.log('final hassh', this.AllPostsWithImgUrl)


    }, (e) => {
      this._snackbar.open("Error in fetching data", '',
        {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        }
      )
    })

  }

  seeAllComments(postId:string){
     this.SeeAllCommentsEvent.emit(postId);
  }
  seeAllLikes(postId:string){
     this.SeeAllLikesEvent.emit(postId);
  }

  setComment(post:getAllPostsResponseWithImgUrl){
    console.log('comment button clicked' ,post)
    this.myEvent.emit(post);

  }

  containsName( str:any): boolean {
    str.replace('/\\"/g', '\\');
    const dataObject = JSON.parse(str);
    return dataObject.likes.includes(this.currentuserfullname);
  }

  topVal = 0;
  onScroll(e: any) {

  }
  sideBarScroll() {

  }
}
