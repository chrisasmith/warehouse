import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingtitleComponent } from './headingtitle.component';

describe('HeadingtitleComponent', () => {
  let component: HeadingtitleComponent;
  let fixture: ComponentFixture<HeadingtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
