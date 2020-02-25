import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  APIData: any[];


  getNews(category: string, country: string): Observable<any> {
    console.log("Categery = ", category);
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=18f1c87e444741aca30db0a569bba999`).subscribe(data => {
      this.APIData = data.articles;
    });
    // console.log("Categories test: ", this.categories);
    return of(this.APIData);
  }
}
