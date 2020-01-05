import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlackTechComponent } from './flack-tech.component';

describe('FlackTechComponent', () => {
  let component: FlackTechComponent;
  let fixture: ComponentFixture<FlackTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlackTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlackTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
