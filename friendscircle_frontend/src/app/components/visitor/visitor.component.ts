import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent {

  friendId: any;
  constructor(private route: ActivatedRoute, private router: Router) {
      this.friendId = this.route.snapshot.paramMap.get('friendId');
      console.log('friendId got from input'+ this.friendId)
      this.router.navigateByUrl('/visitor/'+ this.friendId + '/timeline/' + this.friendId)
  }
}
