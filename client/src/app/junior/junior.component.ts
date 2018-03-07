import { Component, OnInit } from '@angular/core';
import {JuniorService} from '../../services/junior.service'
import {HttpModule, Http } from '@angular/http'
@Component({
  selector: 'app-junior',
  templateUrl: './junior.component.html',
  styleUrls: ['./junior.component.css']
})
export class JuniorComponent implements OnInit {
  users = [];
  
  constructor(private user:JuniorService) { }

  ngOnInit() {
    console.log("Hola")
    this.user.getList()
      .subscribe((users) => {
        this.users = users;
        console.log(this.users)
  })
}
}
