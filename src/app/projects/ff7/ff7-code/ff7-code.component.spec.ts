import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FF7CodeComponent } from './ff7-code.component';

describe('FF7CodeComponent', () => {
  let component: FF7CodeComponent;
  let fixture: ComponentFixture<FF7CodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FF7CodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FF7CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
