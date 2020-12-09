import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnValueComponent } from './return-value.component';

describe('ReturnValueComponent', () => {
  let component: ReturnValueComponent;
  let fixture: ComponentFixture<ReturnValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
