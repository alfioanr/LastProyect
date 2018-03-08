import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.css"]
})
export class PostdetailComponent implements OnInit {
  fullpost: any;
  constructor(
    public postdet: PostService,
    public router: Router,
    private route: ActivatedRoute
  ) {}
id:any;
  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.postdetail(params['id'])
    })
    // this.postdet.get(id)
    // this.id = this.route.snapshot.paramMap.get('id');
  }
  
  postdetail(id) {
    this.postdet.get(id).subscribe(post => {
      this.fullpost = post;
    })
  }
}
