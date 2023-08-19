import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsbyuseridComponent } from './postsbyuserid.component';

describe('PostsbyuseridComponent', () => {
  let component: PostsbyuseridComponent;
  let fixture: ComponentFixture<PostsbyuseridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsbyuseridComponent]
    });
    fixture = TestBed.createComponent(PostsbyuseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
