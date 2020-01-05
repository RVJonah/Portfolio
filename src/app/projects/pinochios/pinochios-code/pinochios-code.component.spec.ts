import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinochiosCodeComponent } from './pinochios-code.component';

describe('PinochiosCodeComponent', () => {
  let component: PinochiosCodeComponent;
  let fixture: ComponentFixture<PinochiosCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinochiosCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinochiosCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
