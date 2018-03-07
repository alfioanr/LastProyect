import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})
export class ReadpostComponent implements OnInit {
  post:any;

  constructor(public postServ : PostService) { }

  ngOnInit() {
    this.postServ.getList().subscribe(post => {
      this.post = post;
      console.log(this.post);
    });
  }

}
