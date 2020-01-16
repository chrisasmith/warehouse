import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCreateSummaryComponent } from './configuration-create-summary.component';

describe('ConfigurationCreateSummaryComponent', () => {
  let component: ConfigurationCreateSummaryComponent;
  let fixture: ComponentFixture<ConfigurationCreateSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationCreateSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCreateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
