import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlackAimsComponent } from './flack-aims.component';

describe('FlackAimsComponent', () => {
  let component: FlackAimsComponent;
  let fixture: ComponentFixture<FlackAimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlackAimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlackAimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
