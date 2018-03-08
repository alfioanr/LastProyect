import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.css"]
})
export class LoginComponentComponent implements OnInit {
  name: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  familiarTechnologys: Array<any>;
  friends: Array<any>;
  error: string;
  constructor(public router: Router, public session: SessionService) {}

  ngOnInit() {}

  login() {
    this.session
      .login(this.username, this.password)
      .subscribe(user => {
        console.log(`Welcome ${user.username}`);
        this.router.navigate(["/"]);
      });
  }

  signup() {
    this.session
      .signup(
        this.name,
        this.lastName,
        this.email,
        this.username,
        this.password,
        this.familiarTechnologys,
        this.friends
      )
      .catch(e => (this.error = e))
      .subscribe();
  }

  logout() {
    this.session
      .logout()
      .catch(e => (this.error = e))
      .subscribe();
  }
}
