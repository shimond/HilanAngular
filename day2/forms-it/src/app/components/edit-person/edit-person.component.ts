import { Person } from './../../model/person.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { combineLatest, debounceTime, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPersonComponent implements OnInit {
  p: Person = {
    id: 2,
    firstName: 'Moshit',
    lastName: 'Levi',
    email: 'mymail@bla.com',
    age: 12,
    homeAddress: {
      city: 'Jerusalem',
      country: 'Israel'
    },
    workAddress: {
      city: 'Tel-Aviv',
      country: 'Israel'
    }
  };
  personForm!: FormGroup;
  num = 10;
  lastSaveTime$!: Observable<Date>;


  constructor(private fb: FormBuilder) { }

  isFine(control: AbstractControl) {
    if (!this.personForm) {
      return;
    }
    const firstNameControl = this.personForm.get('firstName');
    const lastNameNameControl = this.personForm.get('lastName');
    const emailControl = this.personForm.get('email');

    if (firstNameControl?.value && lastNameNameControl?.value) {
      return null;
    }
    if (emailControl?.value) {
      return null;
    }
    return { 'emailBecauseFirstNameLastName': true };
  }

  ngOnInit(): void {
    this.personForm = this.fb.group({
      id: [],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, (control: AbstractControl) => this.isFine(control)]],
      age: [null, [Validators.min(0), Validators.max(120), this.isEven]],
      homeAddress: [null],
      workAddress: this.fb.group({
        city: [null, [Validators.required]],
        country: []
      })
    });


    const firstNameControl = this.personForm.get('firstName');
    const lastNameNameControl = this.personForm.get('lastName');
    if (firstNameControl && lastNameNameControl) {
      combineLatest([firstNameControl.valueChanges, lastNameNameControl.valueChanges])
        .subscribe(() => {
          const emailControl = this.personForm.get('email');
          emailControl?.updateValueAndValidity();
        });
    }

    this.personForm.patchValue(this.p);
    this.lastSaveTime$ = this.personForm.valueChanges.pipe(
      debounceTime(2000),
      filter(x => this.personForm.valid),
      map(x => this.save())
    );

  }

  isLenEquals(control: AbstractControl): ValidationErrors | null {
    if (this.personForm?.value?.firstName) {
      const p: Person = this.personForm.value;
      if (+p.age === p.firstName.length) {
        return null;
      }
      else {
        return { "isLenEquals": { currentValue: p.age } };
      }
    }
    return null;
  }


  isDiviedBy(num: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = +control.value;
      if (value % num === 0) {
        return null;
      }
      else {
        return { "isDiviedBy": { currentValue: value } };
      }
    }
  }

  isEven(control: AbstractControl): ValidationErrors | null {
    const value = +control.value;
    if (value % 2 === 0) {
      return null;
    }
    else {
      return { "isEven": { currentValue: value } };
    }
  }

  getIt() {
    console.log('Invoked.');
  }
  save() {
    this.p = this.personForm.value;
    return new Date();
  }

  changeDisable() {
    this.personForm.disable();
  }

}
