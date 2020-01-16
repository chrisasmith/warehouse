import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrefreshComponent } from './footerrefresh.component';

describe('FooterrefreshComponent', () => {
  let component: FooterrefreshComponent;
  let fixture: ComponentFixture<FooterrefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterrefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
