import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjaruploaderComponent } from './djaruploader.component';

describe('DjaruploaderComponent', () => {
  let component: DjaruploaderComponent;
  let fixture: ComponentFixture<DjaruploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjaruploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjaruploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
