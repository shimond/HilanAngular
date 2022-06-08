import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() RGB!: { red: number; green: number; blue: number }
  colorGroup!: FormGroup;
  color$!: Observable<string>;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorGroup = this.fb.group({
      red: [255],
      green: [0],
      blue: [0]
    })

    this.color$ = this.colorGroup.valueChanges.pipe(startWith(this.colorGroup.value), map(x => `rgb(${x.red},${x.green},${x.blue})`));


    if (this.RGB) {
      this.colorGroup.patchValue(this.RGB);
    }
  }

}
