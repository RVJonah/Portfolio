import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FF7TechComponent } from './ff7-tech.component';

describe('FF7TechComponent', () => {
  let component: FF7TechComponent;
  let fixture: ComponentFixture<FF7TechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FF7TechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FF7TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
