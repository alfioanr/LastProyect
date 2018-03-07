import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { JuniorComponent } from "./junior/junior.component";
import { ProfileComponent } from './profile/profile.component';
import { DevelopfatherComponent } from "./developfather/developfather.component";
import { ReadpostComponent } from './readpost/readpost.component';
import { JuniorService } from "../services/junior.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, JuniorComponent, ProfileComponent, DevelopfatherComponent, ReadpostComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule],
  providers: [JuniorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
