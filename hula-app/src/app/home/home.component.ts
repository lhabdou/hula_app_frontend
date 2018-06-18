import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info ={
    nom:"med",
    email:"med@hotmail.fr",
    tel:"421200021215"
  }



  comments = [
    {date:new Date(), message:"Faites attention"},
    {date:new Date(), message:"Soyez vigilents"},
    {date:new Date(), message:"Faites la paix"},
  ]

  constructor() { }

  ngOnInit() {
     }

}
