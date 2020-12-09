import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivesGroupComponent } from './executives-group.component';

describe('ExecutivesGroupComponent', () => {
  let component: ExecutivesGroupComponent;
  let fixture: ComponentFixture<ExecutivesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutivesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
