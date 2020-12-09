import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivesListComponent } from './executives-list.component';

describe('ExecutivesListComponent', () => {
  let component: ExecutivesListComponent;
  let fixture: ComponentFixture<ExecutivesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutivesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
