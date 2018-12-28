import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtComponent } from './cmt.component';

describe('CmtComponent', () => {
  let component: CmtComponent;
  let fixture: ComponentFixture<CmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
