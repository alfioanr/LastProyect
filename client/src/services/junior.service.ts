
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpModule } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

@Injectable()
export class JuniorService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}
  getList() {
    return this.http.get(`${this.BASE_URL}/users`).map(res => res.json());
  }
  get(id) {
    return this.http
      .get(`${this.BASE_URL}/users/${id}`)
      .map(res => res.json());
  }

  add(friend) {
    return this.http
      .put(`${this.BASE_URL}/users/${friend.id}`, friend)
      .map(res => res.json());
  }

  remove(friend) {
    return this.http
      .delete(`${this.BASE_URL}/users/${friend.id}`, friend)
      .map(res => res.json());
  }
}
