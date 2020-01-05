import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinochiosAimsComponent } from './pinochios-aims.component';

describe('PinochiosAimsComponent', () => {
  let component: PinochiosAimsComponent;
  let fixture: ComponentFixture<PinochiosAimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinochiosAimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinochiosAimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
