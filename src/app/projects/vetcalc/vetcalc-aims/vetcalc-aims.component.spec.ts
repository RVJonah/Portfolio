import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCalcAimsComponent } from './vetcalc-aims.component';

describe('VetCalcAimsComponent', () => {
  let component: VetCalcAimsComponent;
  let fixture: ComponentFixture<VetCalcAimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCalcAimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCalcAimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
