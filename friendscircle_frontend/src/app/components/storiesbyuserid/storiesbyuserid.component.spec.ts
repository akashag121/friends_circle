import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesbyuseridComponent } from './storiesbyuserid.component';

describe('StoriesbyuseridComponent', () => {
  let component: StoriesbyuseridComponent;
  let fixture: ComponentFixture<StoriesbyuseridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesbyuseridComponent]
    });
    fixture = TestBed.createComponent(StoriesbyuseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
