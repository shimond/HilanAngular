import { CounterService } from './../../services/counter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.count$ = this.counterService.counter$.pipe(
      debounceTime(500),
      filter(num => num % 2 === 0),
      map(num => num * 10));
  }

  plus() {
    this.counterService.plus();
  }

  minus() {
    this.counterService.minus();
  }
}
