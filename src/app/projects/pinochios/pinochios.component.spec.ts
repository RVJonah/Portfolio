import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinochiosComponent } from './pinochios.component';

describe('PinochiosComponent', () => {
  let component: PinochiosComponent;
  let fixture: ComponentFixture<PinochiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinochiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinochiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
