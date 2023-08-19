import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from 'src/app/services/callapi.service';
import { loginForm } from 'src/app/models/loginFormModel'
import { loginResponseModel } from 'src/app/models/loginResponseModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private _callapi:CallapiService, private router:Router ,private _snackBar: MatSnackBar){}


  loginform:loginForm = {
    username:"",
    password:""
  }

  loginFormSubmit(){
    console.log("button is clicked")
    this._callapi.loginUser(this.loginform).subscribe((d)=>{
      console.log(d)
      // localStorage.setItem('currentuserid',d);
      this._snackBar.open("Login Successful!",'',
        {
          duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        })
      if(d._token)
      {
        console.log('User logged in successfuly');
        localStorage.setItem('token',d._token);
        localStorage.setItem('currentuserid', d.id.toString());
        localStorage.setItem('currentuserrole',d.roles[0].name==='ROLE_ADMIN'?'Admin':'NormalUser');
        localStorage.setItem('currentuserfullname',d.fullName);
        localStorage.setItem('currentuserUsername',d.username);
        localStorage.setItem('currentuserdescription',d.description);
        localStorage.setItem('currentuserdob',d.dob);
        localStorage.setItem('currentusergender',d.gender);
        localStorage.setItem('currentuserIsActive',d.active.toString());
        localStorage.setItem('currentuserimageid',d.imageId);
        localStorage.setItem('currentuseremailid',d.email);


        this.router.navigateByUrl('/dashboard/home')  
        if(d.active.toString() === 'false'){
          this._snackBar.open("User is Blocked! Kindly contact Admin",'',
          {
            duration:5000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          })
        }
  
      }
      else{
        console.log('login failure');
        this.router.navigateByUrl('login');
      }

    },
    (error)=>{
      console.log(error)
      this._snackBar.open("Invalid Credentials",'',
      {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
    })
  }
}
