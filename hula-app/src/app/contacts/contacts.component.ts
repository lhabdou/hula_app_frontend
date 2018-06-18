import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact={
    nom:"Abdoul",
    email:"test.abdoul@hotmail.fr"
  }

  months = ["", "January", "Feburary", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;

  myClickFunction(event) {
    alert("Button is clicked");     
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
