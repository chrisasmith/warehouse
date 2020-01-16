import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActianRegisterComponent } from './actian-register.component';

describe('ActianRegisterComponent', () => {
  let component: ActianRegisterComponent;
  let fixture: ComponentFixture<ActianRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActianRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActianRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
