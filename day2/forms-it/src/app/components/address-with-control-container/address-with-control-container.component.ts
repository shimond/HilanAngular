import { Component, Input, OnInit, Optional } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address-with-control-container',
  templateUrl: './address-with-control-container.component.html',
  styleUrls: ['./address-with-control-container.component.scss']
})
export class AddressWithControlContainerComponent implements OnInit {

  @Input() groupName: string = '';
  addressFormGroup!: FormGroup;
  constructor(@Optional() private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    const formGroup = this.controlContainer.formDirective as FormGroupDirective;
    this.addressFormGroup = formGroup.form.get(this.groupName) as FormGroup;
  }

}
