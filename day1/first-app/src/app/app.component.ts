import { Person } from './shimon';
import { ChangeDetectionStrategy, Component, OnInit, ɵɵsetComponentScope } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchWord = '';
  results: string[] = [];
  isBusy = false;
  selectedWord = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  setSelected(item: string) {
    if (!item.includes('3')) {
      this.selectedWord = item;
    }

  }


  doSearch() {
    this.isBusy = true;
    this.results = [];
    this.selectedWord = '';
    setTimeout(() => {
      for (let index = 0; index < 4; index++) {
        this.results.push(this.searchWord + index);
      }
      this.selectedWord = this.results[2];
      this.isBusy = false;
    }, 1000);
  }


}
