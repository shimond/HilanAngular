import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class MessageService {

  constructor() {
    console.log('MessageService ctor');
  }

  message(content: string) {
    alert(content);
  }
}

export class MessageServiceMock {
  message(content: string) {
    alert('MOCK ' + content);
  }
}

