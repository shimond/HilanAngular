import { SearchService } from './../../services/search.service';
import { debounceTime, map, filter, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl('');
  result$!: Observable<{ count: number, value: string }[]>;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    const pipeOfWords = this.searchControl.valueChanges.pipe(
      debounceTime(200)
    );

    this.result$ = pipeOfWords.pipe(switchMap((word: string) => this.searchService.search(word)),
      map(list => list.map(p => ({ value: p, count: p.length }))));
  }

  search(str: string) {
    const arr = [];
    for (let index = 0; index < 5; index++) {
      arr.push(str + index);
    }
    return arr;
  }

}
