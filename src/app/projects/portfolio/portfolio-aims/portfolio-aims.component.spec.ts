import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAimsComponent } from './portfolio-aims.component';

describe('PortfolioAimsComponent', () => {
  let component: PortfolioAimsComponent;
  let fixture: ComponentFixture<PortfolioAimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
