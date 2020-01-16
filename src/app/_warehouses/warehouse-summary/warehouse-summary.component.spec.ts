import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseSummaryComponent } from './warehouse-summary.component';

describe('WarehouseSummaryComponent', () => {
  let component: WarehouseSummaryComponent;
  let fixture: ComponentFixture<WarehouseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
