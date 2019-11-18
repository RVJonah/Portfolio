import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTechComponent } from './portfolio-tech.component';

describe('PortfolioTechComponent', () => {
  let component: PortfolioTechComponent;
  let fixture: ComponentFixture<PortfolioTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
