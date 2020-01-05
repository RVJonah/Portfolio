import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlackLearningComponent } from './flack-learning.component';

describe('FlackLearningComponent', () => {
  let component: FlackLearningComponent;
  let fixture: ComponentFixture<FlackLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlackLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlackLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
