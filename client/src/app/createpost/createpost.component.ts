import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { HttpModule, Http } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-createpost",
  templateUrl: "./createpost.component.html",
  styleUrls: ["./createpost.component.css"]
})
export class CreatepostComponent implements OnInit {
  postNew: any;
  constructor(private post: PostService) {}

  ngOnInit() {}

  enviarForm(p) {
      this.postNew = {
       title: p.form.controls.title.value,
      content: p.form.controls.content.value
    };
    
    this.post.add(this.postNew).subscribe(posts => {
      console.log(this.post);
    });
  }
}
