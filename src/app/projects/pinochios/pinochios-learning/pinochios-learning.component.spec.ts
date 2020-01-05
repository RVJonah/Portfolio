import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinochiosLearningComponent } from './pinochios-learning.component';

describe('PinochiosLearningComponent', () => {
  let component: PinochiosLearningComponent;
  let fixture: ComponentFixture<PinochiosLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinochiosLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinochiosLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
