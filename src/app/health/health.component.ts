import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-health",
  templateUrl: "./health.component.html",
  styleUrls: ["./health.component.css"]
})
export class HealthComponent implements OnInit {
  APIData: any[];

  currentCountry = "ua";

  apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.currentCountry}&category=health&apiKey=18f1c87e444741aca30db0a569bba999`;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.articles;
      console.log("API Data ", this.APIData);
    });
  }
}
