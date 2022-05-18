import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit {

  @Input() list: string[] = [];

  @Input() selectedItem = '';
  @Output() selectItemRequested = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(item: string) {
    this.selectItemRequested.emit(item);
  }

}
