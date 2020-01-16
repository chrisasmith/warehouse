import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActianForgotPasswordComponent } from './actian-forgot-password.component';

describe('ActianForgotPasswordComponent', () => {
  let component: ActianForgotPasswordComponent;
  let fixture: ComponentFixture<ActianForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActianForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActianForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
