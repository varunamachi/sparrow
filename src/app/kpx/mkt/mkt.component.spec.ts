import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktComponent } from './mkt.component';

describe('MktComponent', () => {
  let component: MktComponent;
  let fixture: ComponentFixture<MktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
