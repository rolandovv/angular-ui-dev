import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveGroupsListComponent } from './executive-groups-list.component';

describe('ExecutiveGroupsListComponent', () => {
  let component: ExecutiveGroupsListComponent;
  let fixture: ComponentFixture<ExecutiveGroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveGroupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
