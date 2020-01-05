import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinochiosTechComponent } from './pinochios-tech.component';

describe('PinochiosTechComponent', () => {
  let component: PinochiosTechComponent;
  let fixture: ComponentFixture<PinochiosTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinochiosTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinochiosTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
