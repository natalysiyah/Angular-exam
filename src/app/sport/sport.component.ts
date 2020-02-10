import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-sport",
  templateUrl: "./sport.component.html",
  styleUrls: ["./sport.component.css"]
})
export class SportComponent implements OnInit {
  APIData: any[];

  apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&category=sport&apiKey=18f1c87e444741aca30db0a569bba999`;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.articles;
      console.log("API Data ", this.APIData);
    });
  }
}
