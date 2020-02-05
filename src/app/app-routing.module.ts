import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SportComponent } from "./sport/sport.component";
import { ScienceComponent } from "./science/science.component";
import { TechnologyComponent } from "./technology/technology.component";
import { HealthComponent } from "./health/health.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";

const routes: Routes = [
  { path: "sport", component: SportComponent },
  { path: "science", component: ScienceComponent },
  { path: "technology", component: TechnologyComponent },
  { path: "health", component: HealthComponent },
  { path: "entertainment", component: EntertainmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
