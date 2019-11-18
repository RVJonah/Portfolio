import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ff7Component } from './ff7.component';

describe('Ff7Component', () => {
  let component: Ff7Component;
  let fixture: ComponentFixture<Ff7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ff7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ff7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
