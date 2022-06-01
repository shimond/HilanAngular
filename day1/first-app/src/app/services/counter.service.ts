import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubject = new BehaviorSubject<number>(0);

  counter$ = this.counterSubject.asObservable();

  plus() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  minus() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
}

