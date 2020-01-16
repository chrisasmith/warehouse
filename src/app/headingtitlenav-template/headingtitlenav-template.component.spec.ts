import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingtitlenavTemplateComponent } from './headingtitlenav-template.component';

describe('HeadingtitlenavTemplateComponent', () => {
  let component: HeadingtitlenavTemplateComponent;
  let fixture: ComponentFixture<HeadingtitlenavTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingtitlenavTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingtitlenavTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
