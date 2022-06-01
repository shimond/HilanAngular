import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  search(word: string): Observable<string[]> {
    const url = `https://localhost:7031/search/${word}`;
    return this.httpClient.get<string[]>(url);
  }



  constructor(private httpClient: HttpClient) { }

}

