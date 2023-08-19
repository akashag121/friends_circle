import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewpostComponent } from './addnewpost.component';

describe('AddnewpostComponent', () => {
  let component: AddnewpostComponent;
  let fixture: ComponentFixture<AddnewpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewpostComponent]
    });
    fixture = TestBed.createComponent(AddnewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
