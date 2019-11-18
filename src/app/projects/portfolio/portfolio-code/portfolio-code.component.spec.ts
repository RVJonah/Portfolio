import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCodeComponent } from './portfolio-code.component';

describe('PortfolioCodeComponent', () => {
  let component: PortfolioCodeComponent;
  let fixture: ComponentFixture<PortfolioCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
