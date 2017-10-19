import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  options;
  authToken;
  user;
  domain = "localhost://8080";

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
  return this.http.post(this.domain + 'auth/register', user).map(res => res.json());
}

login(user) {
  return this.http.post(this.domain + 'auth/login', user).map(res => res.json());
}

logout() {
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}

storeUserData(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

getProfile(id) {
  this.createAuthenticationHeaders();
  return this.http.get(this.domain + 'auth/profile', this.options).map(res => res.json());
}

loggedIn() {
  return tokenNotExpired();
}


}
