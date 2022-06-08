import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNumericComponent } from './my-numeric.component';

describe('MyNumericComponent', () => {
  let component: MyNumericComponent;
  let fixture: ComponentFixture<MyNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNumericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
