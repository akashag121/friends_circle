import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtimelineComponent } from './vtimeline.component';

describe('VtimelineComponent', () => {
  let component: VtimelineComponent;
  let fixture: ComponentFixture<VtimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VtimelineComponent]
    });
    fixture = TestBed.createComponent(VtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
