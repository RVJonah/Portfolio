import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FF7LearningComponent } from './ff7-learning.component';

describe('FF7LearningComponent', () => {
  let component: FF7LearningComponent;
  let fixture: ComponentFixture<FF7LearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FF7LearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FF7LearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
