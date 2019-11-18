import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCalcLearningComponent } from './vetcalc-learning.component';

describe('VetCalcLearningComponent', () => {
  let component: VetCalcLearningComponent;
  let fixture: ComponentFixture<VetCalcLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCalcLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCalcLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
