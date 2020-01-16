import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobschedulerComponent } from './jobscheduler.component';

describe('JobschedulerComponent', () => {
  let component: JobschedulerComponent;
  let fixture: ComponentFixture<JobschedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobschedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
