import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';

// TODO: Add tokens to this service.
@Injectable()
export class AuthService {
  options;
  authToken;
  user;
  apipath = '/api/user';

  constructor(
    private http: Http
  ) { }

  createAuthenticationHeaders() {
  this.loadToken();
  this.options = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'authorization': this.authToken
    })
  })
}

loadToken() {
  this.authToken = localStorage.getItem('token');
}

registerUser(user){
  return this.http.post(this.apipath + 'auth/register', user).map(res => res.json());
}

login(user) {
  // console.log("in auth service");
  return this.http.post(this.apipath, user).map(res => res.json());
}

logout() {
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}

storeUserData(user) {
  //localStorage.setItem('token', token);
  localStorage.setItem("user",JSON.stringify(user));
  //this.authToken = token;
  this.user = user;
}

getProfile(id) {
  this.createAuthenticationHeaders();
  return this.http.get(this.apipath + '/profile', this.options).map(res => res.json());
}

loggedIn() {
  return tokenNotExpired();
}

getCurrentUser() {
  // let user:any = localStorage.getItem("user");
  let user:any  = JSON.parse(localStorage.getItem("user"));
  console.log(typeof(user));
  let result:any = {
    "username":"",
    "firstName":"",
    "lastName":"",
    "email":"",
    "valid": false
  };

  if ( user ) {
    // user.valid = true;
    result = user;
  }
  return result;
}

}
