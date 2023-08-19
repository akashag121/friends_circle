import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  isAdmin:boolean = false;

  constructor(private route:Router){
    if(localStorage.getItem('currentuserrole')==='Admin'){
      console.log('current user is Admin')
      this.isAdmin = true;
    }
  }

  logOut(){
    localStorage.clear()
    this.route.navigateByUrl('/')

  }
}
