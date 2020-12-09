import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExecutivesComponent } from './add-executives.component';

describe('AddExecutivesComponent', () => {
  let component: AddExecutivesComponent;
  let fixture: ComponentFixture<AddExecutivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExecutivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExecutivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
