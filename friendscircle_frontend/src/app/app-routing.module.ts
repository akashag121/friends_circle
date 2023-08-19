import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NetworkComponent } from './components/network/network.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { VtimelineComponent } from './components/vtimeline/vtimeline.component';
import { VfriendsComponent } from './components/vfriends/vfriends.component';
import { AllusersComponent } from './components/allusers/allusers.component';
import { authGuard } from './guards/auth.guard';
import { isactiveGuard } from './guards/isactive.guard';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent,canActivate:[isactiveGuard],
    children: [
      { path: "home", component: HomeComponent , canActivate:[isactiveGuard]},
      { path: "network", component: NetworkComponent , canActivate:[isactiveGuard]},
      { path: "friends", component: FriendsComponent , canActivate:[isactiveGuard]},
      { path: "timeline", component: TimelineComponent , canActivate:[isactiveGuard]},
      { path: "allusers", component: AllusersComponent, canActivate: [authGuard, isactiveGuard] },
      
    ]
  },
  {
    path: "visitor/:friendId", component: VisitorComponent,
    children: [
      { path: "friends/:friendId", component: VfriendsComponent , canActivate:[isactiveGuard]},
      { path: "timeline/:friendId", component: VtimelineComponent , canActivate:[isactiveGuard]},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
