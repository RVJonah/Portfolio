import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FF7OverviewComponent } from './ff7-overview.component';

describe('FF7OverviewComponent', () => {
  let component: FF7OverviewComponent;
  let fixture: ComponentFixture<FF7OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FF7OverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FF7OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
