import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewstoryComponent } from './addnewstory.component';

describe('AddnewstoryComponent', () => {
  let component: AddnewstoryComponent;
  let fixture: ComponentFixture<AddnewstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewstoryComponent]
    });
    fixture = TestBed.createComponent(AddnewstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
