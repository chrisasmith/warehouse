import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationManagerComponent } from './integration-manager.component';

describe('IntegrationManagerComponent', () => {
  let component: IntegrationManagerComponent;
  let fixture: ComponentFixture<IntegrationManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
