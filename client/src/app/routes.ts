
import { Routes } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { JuniorComponent } from "./junior/junior.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReadpostComponent } from "./readpost/readpost.component";
import { LoginComponentComponent } from './login-component/login-component.component';
import { CreatepostComponent } from "./createpost/createpost.component";
import { EditpostComponent } from "./editpost/editpost.component";
import {SignupComponent} from "./signup/signup.component"
import { PostdetailComponent } from "./postdetail/postdetail.component";
export const routes: Routes = [
  { path: "", component: HomeComponent  },
  { path: "login", component: LoginComponentComponent  },
  { path: "signup", component: SignupComponent  },
  {path:"profile", component:ProfileComponent},
  {path:"beadopted", component:JuniorComponent},
  {path:"readposts", component:ReadpostComponent},
  {path:"postdetail/:id", component:PostdetailComponent},
  {path:"createpost", component:CreatepostComponent},
  {path:"editpost", component:EditpostComponent},
  
  { path: "**", redirectTo: "" }
];
