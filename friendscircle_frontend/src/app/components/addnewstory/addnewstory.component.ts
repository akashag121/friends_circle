import { Component , EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addNewPostReq } from 'src/app/models/addNewPostReqModel';
import { addNewStoryReq } from 'src/app/models/addNewStoryReqModel';
import { Comm, commentResp } from 'src/app/models/commentResponse';
import { getAllPostsResponse } from 'src/app/models/getAllPostsRespModel';
import { CallapiService } from 'src/app/services/callapi.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addnewstory',
  templateUrl: './addnewstory.component.html',
  styleUrls: ['./addnewstory.component.scss']
})
export class AddnewstoryComponent {
  constructor(private _callapi: CallapiService, private _snackbar:MatSnackBar){
    this.currentUserId = localStorage.getItem('currentuserid');
    this.currentuserfullname = localStorage.getItem('currentuserfullname');

  }
  @Input() postToBeCommented!: getAllPostsResponse;
  @Output() commentAdded = new EventEmitter<string>();
  storyData:string= '';
  currentUserId: any = '';
  currentuserfullname: any = '';

  getCommentResponse!: commentResp;
  postImageId!: number;
  addNewStoryPayload: addNewStoryReq = 
    {
      "userId":this.currentUserId,
      "userName":this.currentuserfullname,
      "storyCaption":"",
      "storyImageId":""

  }
  
  

  // Commen: Comment = new Comment();
  ngOnInit(): void {

  }

  addNewStorySubmit(){
    console.log('story data reached to submit', this.storyData);
    this.addNewStoryPayload.userId = this.currentUserId;
    this.addNewStoryPayload.userName= this.currentuserfullname;
    
    this._callapi.addNewStory(this.addNewStoryPayload).subscribe((d)=>{
      console.log('AddNewStory response', d);
      Swal.fire('Success','Your Story published!','success')
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
        this.addNewStoryPayload.storyImageId = d.toString();
    //     console.log('post image id', this.postImageId);
    //     this.data.postImageId = this.postImageId;
      })
    // }
  }
}
}
