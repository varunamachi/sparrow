import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientErrorComponent } from './client-error.component';

describe('ClientErrorComponent', () => {
  let component: ClientErrorComponent;
  let fixture: ComponentFixture<ClientErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
