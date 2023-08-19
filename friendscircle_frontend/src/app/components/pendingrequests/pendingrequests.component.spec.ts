import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingrequestsComponent } from './pendingrequests.component';

describe('PendingrequestsComponent', () => {
  let component: PendingrequestsComponent;
  let fixture: ComponentFixture<PendingrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingrequestsComponent]
    });
    fixture = TestBed.createComponent(PendingrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
