import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomConfigModalComponent } from './custom-config-modal.component';

describe('CustomConfigModalComponent', () => {
  let component: CustomConfigModalComponent;
  let fixture: ComponentFixture<CustomConfigModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomConfigModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
