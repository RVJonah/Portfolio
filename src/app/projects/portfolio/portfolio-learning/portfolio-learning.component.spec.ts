import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLearningComponent } from './portfolio-learning.component';

describe('PortfolioLearningComponent', () => {
  let component: PortfolioLearningComponent;
  let fixture: ComponentFixture<PortfolioLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
