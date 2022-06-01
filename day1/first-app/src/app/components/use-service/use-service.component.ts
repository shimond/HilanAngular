import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-service',
  templateUrl: './use-service.component.html',
  styleUrls: ['./use-service.component.scss']
})
export class UseServiceComponent implements OnInit {

  constructor(private mService: MessageService) { }

  ngOnInit(): void {

  }

  checkIt(){
    this.mService.message('FROM INNER COMPONENT');
  }
}
