import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMonitorComponent } from './entity-monitor.component';

describe('EntityMonitorComponent', () => {
  let component: EntityMonitorComponent;
  let fixture: ComponentFixture<EntityMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
