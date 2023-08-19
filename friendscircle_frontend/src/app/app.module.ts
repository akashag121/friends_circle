import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';


import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { PostsComponent } from './components/posts/posts.component';
import { StoriesComponent } from './components/stories/stories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NetworkComponent } from './components/network/network.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';


import { MatRippleModule } from '@angular/material/core';
 
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { FriendrequestsComponent } from './components/friendrequests/friendrequests.component';
import { PeopleumaynowComponent } from './components/peopleumaynow/peopleumaynow.component';
import { PendingrequestsComponent } from './components/pendingrequests/pendingrequests.component';
import { PostsbyuseridComponent } from './components/postsbyuserid/postsbyuserid.component';
import { StoriesbyuseridComponent } from './components/storiesbyuserid/storiesbyuserid.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { VheaderComponent } from './components/vheader/vheader.component';
import { VleftsidebarComponent } from './components/vleftsidebar/vleftsidebar.component';
import { VtimelineComponent } from './components/vtimeline/vtimeline.component';
import { VfriendsComponent } from './components/vfriends/vfriends.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import {MatChipsModule} from '@angular/material/chips';
import { CommentsComponent } from './components/comments/comments.component';
// import { LikeComponent } from './components/like/like.component';
import { CommentcountComponent } from './components/commentcount/commentcount.component';
import { LikecountComponent } from './components/likecount/likecount.component';
import { AddnewpostComponent } from './components/addnewpost/addnewpost.component';
import { AllusersComponent } from './components/allusers/allusers.component';
import { ActiveusersComponent } from './components/activeusers/activeusers.component';
import { BlockedusersComponent } from './components/blockedusers/blockedusers.component';
import { AddnewstoryComponent } from './components/addnewstory/addnewstory.component';
// import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    LeftsidebarComponent,
    PostsComponent,
    StoriesComponent,
    DashboardComponent,
    NetworkComponent,
    FriendsComponent,
    TimelineComponent,
    HomeComponent,
    FriendrequestsComponent,
    PeopleumaynowComponent,
    PendingrequestsComponent,
    PostsbyuseridComponent,
    StoriesbyuseridComponent,
    VisitorComponent,
    VheaderComponent,
    VleftsidebarComponent,
    VtimelineComponent,
    VfriendsComponent,
    CommentsComponent,
    // LikeComponent,
    CommentcountComponent,
    LikecountComponent,
    AddnewpostComponent,
    AllusersComponent,
    ActiveusersComponent,
    BlockedusersComponent,
    AddnewstoryComponent,
    // SettingComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    ScrollingModule,
    MatRippleModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatChipsModule
  ],bootstrap: [AppComponent]
})
export class AppModule { }
