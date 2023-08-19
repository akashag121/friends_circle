import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentcountComponent } from './commentcount.component';

describe('CommentcountComponent', () => {
  let component: CommentcountComponent;
  let fixture: ComponentFixture<CommentcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentcountComponent]
    });
    fixture = TestBed.createComponent(CommentcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
