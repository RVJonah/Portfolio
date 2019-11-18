import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCalcOverviewComponent } from './vetcalc-overview.component';

describe('VetCalcOverviewComponent', () => {
  let component: VetCalcOverviewComponent;
  let fixture: ComponentFixture<VetCalcOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCalcOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCalcOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
