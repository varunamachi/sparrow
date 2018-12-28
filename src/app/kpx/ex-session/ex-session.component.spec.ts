import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSessionComponent } from './ex-session.component';

describe('ExSessionComponent', () => {
  let component: ExSessionComponent;
  let fixture: ComponentFixture<ExSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
