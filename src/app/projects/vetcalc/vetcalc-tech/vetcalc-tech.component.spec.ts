import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCalcTechComponent } from './vetcalc-tech.component';

describe('VetCalcTechComponent', () => {
  let component: VetCalcTechComponent;
  let fixture: ComponentFixture<VetCalcTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCalcTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCalcTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
