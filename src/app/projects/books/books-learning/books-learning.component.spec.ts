import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLearningComponent } from './books-learning.component';

describe('BooksLearningComponent', () => {
  let component: BooksLearningComponent;
  let fixture: ComponentFixture<BooksLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
