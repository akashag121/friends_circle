import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VheaderComponent } from './vheader.component';

describe('VheaderComponent', () => {
  let component: VheaderComponent;
  let fixture: ComponentFixture<VheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VheaderComponent]
    });
    fixture = TestBed.createComponent(VheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
