import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceModalComponent } from './salesforce-modal.component';

describe('SalesforceModalComponent', () => {
  let component: SalesforceModalComponent;
  let fixture: ComponentFixture<SalesforceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesforceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
