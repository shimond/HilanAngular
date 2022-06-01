import { MessageService, MessageServiceMock } from './../../services/message.service';
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

  constructor(private readonly mService: MessageService) { }

  ngOnInit(): void {
  }

  stam() {
    this.mService.message('STAM');
    // this.list[3] = 'WOW';
  }

  setSelected(item: string) {
    this.selectItemRequested.emit(item);
  }

}
