import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCreateComponent } from './agent-create.component';

describe('AgentCreateComponent', () => {
  let component: AgentCreateComponent;
  let fixture: ComponentFixture<AgentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
