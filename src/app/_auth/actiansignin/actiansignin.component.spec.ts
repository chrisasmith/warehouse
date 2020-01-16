import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiansigninComponent } from './actiansignin.component';

describe('ActiansigninComponent', () => {
  let component: ActiansigninComponent;
  let fixture: ComponentFixture<ActiansigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiansigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiansigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
