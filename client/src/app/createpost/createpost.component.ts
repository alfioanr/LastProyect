import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service'
import { HttpModule, Http } from "@angular/http";

@Component({
  selector: "app-createpost",
  templateUrl: "./createpost.component.html",
  styleUrls: ["./createpost.component.css"]
})
export class CreatepostComponent implements OnInit {
  posts = [];
  constructor(private post: PostService) {}

  ngOnInit() {
    this.post.add(this.post).subscribe(posts => {
      this.post = posts;
      console.log(this.posts);
    });
  }
}
