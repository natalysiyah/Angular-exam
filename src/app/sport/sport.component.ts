import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";


@Component({
  selector: "app-sport",
  templateUrl: "./sport.component.html",
  styleUrls: ["./sport.component.css"]
})
export class SportComponent implements OnInit {
  APIData: any[];



  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews("sport", "us").subscribe(APIData => this.APIData = APIData);
    console.log("Sport API Data ", this.APIData);
  };
}
