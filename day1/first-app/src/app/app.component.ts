import { Observable } from 'rxjs';
import { Person } from './shimon';
import { ChangeDetectionStrategy, Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showAll = false;
  count = 0;

  constructor(private counterService: CounterService) {


  }

  ngOnInit(): void {
    this.counterService.counter$.subscribe(newValue => {
      this.count = newValue;
    });
  }



}
