import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTechComponent } from './books-tech.component';

describe('BooksTechComponent', () => {
  let component: BooksTechComponent;
  let fixture: ComponentFixture<BooksTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
