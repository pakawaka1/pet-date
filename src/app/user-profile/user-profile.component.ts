import { Component, OnInit } from '@angular/core';
import { IHistory } from './ihistory';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: String;
  email: String;
  history = Array();

  constructor() {
  }

  ngOnInit() {
    this.getUserInfo();
    this.getHistory();
  }

  private getUserInfo() {
    // Here is where we would accept session user record.
    this.username = 'Jim';
    this.email = 'jim@go.com';
  }

  private getHistory() {
    let h:IHistory =
      {pet:"fluffy", activity:'Grooming', date:'1/1/16', rate:4.5 };
    this.history.push(h);

    h = {pet:'Sam', date:'1/1/15', activity:'Walk', rate:5};
    this.history.push(h);

    h = {pet:'Fluffy', date:'2/2/14', activity:'Pet', rate:-2};
    this.history.push(h);

    h = {pet:'Scruffy', date:'3/2/14', activity:'Jump', rate:3};
    this.history.push(h);

    h = {pet:'GoGo', date:'4/2/14', activity:'Run', rate:7};
    this.history.push(h);

    console.log(this.history);
  }

}
