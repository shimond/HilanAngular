import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-numeric',
  templateUrl: './my-numeric.component.html',
  styleUrls: ['./my-numeric.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MyNumericComponent,
    multi: true
  }]
})
export class MyNumericComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = '';

  value = 0;
  private callback: any;
  disabled: boolean = false;
  constructor() { }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.callback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  private raiseEvent() {
    if (this.callback) {
      this.callback(this.value);
    }
  }

  plus() {
    this.value++;
    this.raiseEvent();
  }

  minus() {
    this.value--;
    this.raiseEvent();

  }

}
