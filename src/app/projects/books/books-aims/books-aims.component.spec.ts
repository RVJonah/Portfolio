import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAimsComponent } from './books-aims.component';

describe('BooksAimsComponent', () => {
  let component: BooksAimsComponent;
  let fixture: ComponentFixture<BooksAimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
