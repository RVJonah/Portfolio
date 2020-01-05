import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinochiosOverviewComponent } from './pinochios-overview.component';

describe('PinochiosOverviewComponent', () => {
  let component: PinochiosOverviewComponent;
  let fixture: ComponentFixture<PinochiosOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinochiosOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinochiosOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
