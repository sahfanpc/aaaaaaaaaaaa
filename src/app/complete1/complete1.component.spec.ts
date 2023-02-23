import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complete1Component } from './complete1.component';

describe('Complete1Component', () => {
  let component: Complete1Component;
  let fixture: ComponentFixture<Complete1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Complete1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
