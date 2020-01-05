import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlackComponent } from './flack.component';

describe('FlackComponent', () => {
  let component: FlackComponent;
  let fixture: ComponentFixture<FlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
