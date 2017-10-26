import { Component, OnInit } from '@angular/core';
import { IHistory } from './ihistory';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userid: String ;
  username: String;
  email: String;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.userloggedin();
  }

  // Determine if a user is logged in.
  // Return true if logged in.
  private userloggedin():boolean {
    let result = false;
    this.username = '';
    this.userid = '';
    this.email = '';

    const currUser = this.authService.getCurrentUser();
    const user = currUser.username;
    const id = currUser.id;
    const email = currUser.email;
    if (user.length > 0) {
      this.username = user;
      this.userid = id;
      this.email = email;
      result = true;
    }
    return result;
  }

}
