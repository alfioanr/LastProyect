
import { Routes } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { JuniorComponent } from "./junior/junior.component";
import { ProfileComponent } from "./profile/profile.component";
import { DevelopfatherComponent } from "./developfather/developfather.component";
import { ReadpostComponent } from "./readpost/readpost.component";


export const routes: Routes = [
  { path: "", component: HomeComponent  },
  {path:"junior", component: JuniorComponent},
  {path:"profile", component:ProfileComponent},
  {path:"beadopted", component:DevelopfatherComponent},
  {path:"readposts", component:ReadpostComponent},
  { path: "**", redirectTo: "" }
];
