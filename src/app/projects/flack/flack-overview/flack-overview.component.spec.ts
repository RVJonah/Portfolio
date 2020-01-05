import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlackOverviewComponent } from './flack-overview.component';

describe('FlackOverviewComponent', () => {
  let component: FlackOverviewComponent;
  let fixture: ComponentFixture<FlackOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlackOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlackOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
