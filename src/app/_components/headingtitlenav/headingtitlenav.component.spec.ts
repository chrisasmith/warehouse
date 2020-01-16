import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingtitlenavComponent } from './headingtitlenav.component';

describe('HeadingtitlenavComponent', () => {
  let component: HeadingtitlenavComponent;
  let fixture: ComponentFixture<HeadingtitlenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingtitlenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingtitlenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
