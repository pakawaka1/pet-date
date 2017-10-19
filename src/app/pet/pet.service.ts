import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class PetService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    })
  }

  getAllPets(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'pets/allPets', this.options).map(res => res.json());
  }

  getOnePet(id){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'pets/onePet/' + id, this.options).map(res => res.json());
  }

  postComment(id, comment){
    this.createAuthenticationHeaders();
    const petData = {id: id, review: comment};
    return this.http.post(this.domain + 'pets/comment', petData, this.options).map(res => res.json());
  }

  schedulePet(id, dateSched){
    this.createAuthenticationHeaders();
    const petData = {id: id, dateSched: dateSched};
    return this.http.post(this.domain + 'pets/schedule', petData, this.options).map(res => res.json());
  }

}
