import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallapiService } from 'src/app/services/callapi.service';
import { Router } from '@angular/router';
import { registerNewUserReqModel } from 'src/app/models/registerUserRequestModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _callapi:CallapiService, private router: Router, private _snackBar: MatSnackBar){}
  registerform:registerNewUserReqModel = {
    "username":"",
    "email":"",
    "password":"",
    "imageId":"",
    "description":"",
    "role":"",
    "fullName":"",
    "dob":"",
    "gender":""
  }
  obj:any = {"confirm":""}

registerFormSubmit(){
  console.log("button is clicked")

  this.registerform.role = null;
  // this.registerform.dob = null;
  this._callapi.registerNewUser(this.registerform).subscribe((d)=>{
    Swal.fire('Success','User Registration Successful!','success')
    console.log(d)
    this.router.navigateByUrl('/')
  },
  (error)=>{
    Swal.fire('Failure','User Registration Failure!','error')
  })

}

profileImageChange(event:any){

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
      this.registerform.imageId = d.toString();
      // this.addNewPostPayload.postImageId = d.toString();
  //     console.log('post image id', this.postImageId);
  //     this.data.postImageId = this.postImageId;
    })
  // }
}
}

}
