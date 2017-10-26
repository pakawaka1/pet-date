import {Component, OnInit} from '@angular/core';
import {IHistory} from '../user-profile/ihistory';
import {AuthService} from '../auth/auth.service';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private username = '';
  private userid = '';
  public history = []; // [IHistory];
  private options;
  private apiPath = '/api';

  constructor(
    private authService: AuthService,
    private http: Http
  ) {
    //
  }

  ngOnInit() {
    if (this.userloggedin()) {
      this.loadHistoryForUser();
    }
  }

  loadHistoryForUser() {
    this.apiPath = '/api/history/';
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    });

    const api = this.apiPath + this.userid;
    return this.http.get(api, this.options )
      .map(res => res.json())
      .subscribe( data => {
        console.dir(data);
        this.history = data;
      } );
  }

  // Determine if a user is logged in.
  // Return true if logged in.
  private userloggedin():boolean {
    let result = false;
    this.username = '';
    this.userid = '';

    const currUser = this.authService.getCurrentUser();
    const user = currUser.username;
    const id = currUser.id;
    if (user.length > 0) {
      this.username = user;
      this.userid = id;
      result = true;
    }
    return result;
  }
}
