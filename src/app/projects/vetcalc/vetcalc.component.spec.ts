import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetcalcComponent } from './vetcalc.component';

describe('VetcalcComponent', () => {
  let component: VetcalcComponent;
  let fixture: ComponentFixture<VetcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
