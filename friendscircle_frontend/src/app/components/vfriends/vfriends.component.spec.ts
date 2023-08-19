import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfriendsComponent } from './vfriends.component';

describe('VfriendsComponent', () => {
  let component: VfriendsComponent;
  let fixture: ComponentFixture<VfriendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VfriendsComponent]
    });
    fixture = TestBed.createComponent(VfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
