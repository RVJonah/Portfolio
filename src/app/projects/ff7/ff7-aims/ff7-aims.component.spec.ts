import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FF7AimsComponent } from './ff7-aims.component';

describe('FF7AimsComponent', () => {
  let component: FF7AimsComponent;
  let fixture: ComponentFixture<FF7AimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FF7AimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FF7AimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
