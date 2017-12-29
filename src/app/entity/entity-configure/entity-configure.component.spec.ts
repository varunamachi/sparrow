import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityConfigureComponent } from './entity-configure.component';

describe('EntityConfigureComponent', () => {
  let component: EntityConfigureComponent;
  let fixture: ComponentFixture<EntityConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
