import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCodeComponent } from './books-code.component';

describe('BooksCodeComponent', () => {
  let component: BooksCodeComponent;
  let fixture: ComponentFixture<BooksCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
