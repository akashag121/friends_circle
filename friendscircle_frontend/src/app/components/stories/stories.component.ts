import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllStoriesResponse } from 'src/app/models/getAllStoriesRespModel';
import { getAllStoriesWithImgUrlResponse } from 'src/app/models/getAllStoriesRespWithImgUrlModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  AllStories: getAllStoriesResponse[] = [];
  AllStoriesWithImgUrl: getAllStoriesWithImgUrlResponse[] = [];
  currentUserId: any = '';
  @Output() addNewStoryEvent = new EventEmitter<boolean>();


  constructor(private _callapi: CallapiService, private _snackbar: MatSnackBar) {



  }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('currentuserid');

    this._callapi.getAllStoriesByUserIds(this.currentUserId).subscribe((d) => {
      console.log(d)
      this.AllStories = d;
      //To DO
      this.AllStories.forEach((story) => {

        if (story.storyImageId === '' || story.storyImageId === null) {
          let resp = new getAllStoriesWithImgUrlResponse();
          resp.userId = story.userId;
          resp.userName = story.userName;
          resp.createdDate = story.createdDate;
          resp.storyCaption = story.storyCaption;
          resp.storyId = story.storyId;
          resp.storyImageId = story.storyImageId;
          resp.storyImageUrl = "";


          this.AllStoriesWithImgUrl.push(resp);
        }
        else {
          this._callapi.getImageFromDB(story.storyImageId).subscribe((g) => {
            let storyImageUrl = URL.createObjectURL(g);
            let resp = new getAllStoriesWithImgUrlResponse();
            resp.userId = story.userId;
            resp.userName = story.userName;
            resp.createdDate = story.createdDate;
            resp.storyCaption = story.storyCaption;
            resp.storyId = story.storyId;
            resp.storyImageId = story.storyImageId;
            resp.storyImageUrl = storyImageUrl;


            this.AllStoriesWithImgUrl.push(resp);


          })
        }
      })

      console.log('final hassh', this.AllStoriesWithImgUrl)


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

  addNewStory() {
    console.log('add new story is called')
    this.addNewStoryEvent.emit(true);
  }
}
