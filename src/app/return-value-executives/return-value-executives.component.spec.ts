import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnValueExecutivesComponent } from './return-value-executives.component';

describe('ReturnValueExecutivesComponent', () => {
  let component: ReturnValueExecutivesComponent;
  let fixture: ComponentFixture<ReturnValueExecutivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnValueExecutivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnValueExecutivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
