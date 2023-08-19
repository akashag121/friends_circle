import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VleftsidebarComponent } from './vleftsidebar.component';

describe('VleftsidebarComponent', () => {
  let component: VleftsidebarComponent;
  let fixture: ComponentFixture<VleftsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VleftsidebarComponent]
    });
    fixture = TestBed.createComponent(VleftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
