import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { JuniorComponent } from "./junior/junior.component";
import { ProfileComponent } from './profile/profile.component';
import { DevelopfatherComponent } from "./developfather/developfather.component";
import { ReadpostComponent } from './readpost/readpost.component';
import { SessionService } from "../services/session.service";
import { JuniorService } from "../services/junior.service";
import { LoginComponentComponent } from './login-component/login-component.component';
import { PostService } from "../services/post.service";
import { CreatepostComponent } from './createpost/createpost.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JuniorComponent, ProfileComponent, DevelopfatherComponent, ReadpostComponent, LoginComponentComponent, CreatepostComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule],
  providers: [SessionService, JuniorService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
