import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleumaynowComponent } from './peopleumaynow.component';

describe('PeopleumaynowComponent', () => {
  let component: PeopleumaynowComponent;
  let fixture: ComponentFixture<PeopleumaynowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleumaynowComponent]
    });
    fixture = TestBed.createComponent(PeopleumaynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
