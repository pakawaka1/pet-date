import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class PetService {

  options;
  apipath = '/api/pet';

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

  getPets(){
    //this.createAuthenticationHeaders();
    return this.http.get(this.apipath + 's', this.options).map(res => res.json());
  }

  getOnePet(id){
    //this.createAuthenticationHeaders();
    const api = this.apipath + '/' + id;
    console.log('service.getOnePet: ' + api);
    return this.http.get(api, this.options).map(res => res.json());
  }

  postComment(id, comment){
    //this.createAuthenticationHeaders();
    const petData = {id: id, review: comment};
    return this.http.post(this.apipath + 'pets/comment', petData, this.options).map(res => res.json());
  }

  schedulePet(id, dateSched){
    //this.createAuthenticationHeaders();
    const petData = {id: id, dateSched: dateSched};
    return this.http.post(this.apipath + 'pets/schedule', petData, this.options).map(res => res.json());
  }

}
