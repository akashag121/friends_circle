import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikecountComponent } from './likecount.component';

describe('LikecountComponent', () => {
  let component: LikecountComponent;
  let fixture: ComponentFixture<LikecountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikecountComponent]
    });
    fixture = TestBed.createComponent(LikecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
