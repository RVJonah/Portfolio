import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlackCodeComponent } from './flack-code.component';

describe('FlackCodeComponent', () => {
  let component: FlackCodeComponent;
  let fixture: ComponentFixture<FlackCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlackCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlackCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
