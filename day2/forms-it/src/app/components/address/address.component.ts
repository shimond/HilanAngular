import { Address } from './../../model/person.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { Component, Input, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AddressComponent,
    multi: true
  }]

})
export class AddressComponent implements OnInit, ControlValueAccessor {

  @Input() address!: Address;

  addressFormGroup!: FormGroup;
  private callBack: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressFormGroup = this.createAddressForm();
    this.addressFormGroup.valueChanges.subscribe(address => {
      if (this.callBack) {
        this.callBack(address);
      }
    })
  }

  createAddressForm() {
    return this.fb.group({
      city: [null, [Validators.required]],
      country: []
    })
  }

  writeValue(obj: any): void {
    console.log('Address', obj);
    this.addressFormGroup.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.callBack = fn;
  }

  registerOnTouched(fn: any): void {
  }


}
