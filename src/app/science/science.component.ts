import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-science",
  templateUrl: "./science.component.html",
  styleUrls: ["./science.component.css"]
})
export class ScienceComponent implements OnInit {
  APIData: any[];

  apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=18f1c87e444741aca30db0a569bba999`;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.articles;
      console.log("API Data ", this.APIData);
    });
  }
}
