import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilemgrComponent } from './filemgr.component';

describe('FilemgrComponent', () => {
  let component: FilemgrComponent;
  let fixture: ComponentFixture<FilemgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilemgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilemgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
