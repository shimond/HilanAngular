import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressWithControlContainerComponent } from './address-with-control-container.component';

describe('AddressWithControlContainerComponent', () => {
  let component: AddressWithControlContainerComponent;
  let fixture: ComponentFixture<AddressWithControlContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressWithControlContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressWithControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
