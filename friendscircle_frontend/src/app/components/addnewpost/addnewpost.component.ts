import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addNewPostReq } from 'src/app/models/addNewPostReqModel';
import { Comm, commentResp } from 'src/app/models/commentResponse';
import { getAllPostsResponse } from 'src/app/models/getAllPostsRespModel';
import { CallapiService } from 'src/app/services/callapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnewpost',
  templateUrl: './addnewpost.component.html',
  styleUrls: ['./addnewpost.component.scss']
})
export class AddnewpostComponent {
  constructor(private _callapi: CallapiService, private _snackbar:MatSnackBar){
    this.currentUserId = localStorage.getItem('currentuserid');
    this.currentuserfullname = localStorage.getItem('currentuserfullname');

  }
  @Input() postToBeCommented!: getAllPostsResponse;
  @Output() commentAdded = new EventEmitter<string>();

  postData:string= '';
  currentUserId: any = '';
  currentuserfullname: any = '';

  getCommentResponse!: commentResp;
  postImageId!: number;
  addNewPostPayload: addNewPostReq = 
    {
      "userId":this.currentUserId,
      "userName":this.currentuserfullname,
      "postCaption":"",
      "postImageId":"",
      "likes":"{\"likes\":[]}",
      "comments":"{\"comments\":[]}"
  }
  
  

  // Commen: Comment = new Comment();
  ngOnInit(): void {

  }

  addNewPostSubmit(){
    console.log('post data reached to submit', this.postData);
    this.addNewPostPayload.userId = this.currentUserId;
    this.addNewPostPayload.userName= this.currentuserfullname;
    
    this._callapi.addNewPost(this.addNewPostPayload).subscribe((d)=>{
      console.log('AddNewPost response', d);
      Swal.fire('Success','Your Post published!','success')
    },(e)=>{
      Swal.fire('failure','Post not published!','error')
    })
  }

  onImageChange(event: any) {
    console.log('on OnImageChange')
    if (event.target.files.length > 0) {
      console.log('Image change reached')
      const file = event.target.files[0];
      const formData = new FormData();
      formData.set('file', file);
      console.log('Image change reached', formData)

      this._callapi.uploadNewImage(formData).subscribe((d) => {
        console.log('Response from upload image', d);
        this.addNewPostPayload.postImageId = d.toString();
    //     console.log('post image id', this.postImageId);
    //     this.data.postImageId = this.postImageId;
      })
    // }
  }
}
}
