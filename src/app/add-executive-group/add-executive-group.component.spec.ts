import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExecutiveGroupComponent } from './add-executive-group.component';

describe('AddExecutiveGroupComponent', () => {
  let component: AddExecutiveGroupComponent;
  let fixture: ComponentFixture<AddExecutiveGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExecutiveGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExecutiveGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
