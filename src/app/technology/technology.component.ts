import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
@Component({
  selector: "app-technology",
  templateUrl: "./technology.component.html",
  styleUrls: ["./technology.component.css"]
})
export class TechnologyComponent implements OnInit {
  APIData: any[];

  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews("technology", "us").subscribe(APIData => this.APIData = APIData);
    console.log("Techno API Data ", this.APIData);
  }
}
