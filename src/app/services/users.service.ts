import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

	apipath = '/api/user';

	constructor(private http: Http) {
		console.log('usersService');
	}

	getUser(email) {
		return this.http.post(this.apipath, JSON.stringify(email))
			.map(res => res.json());
	}
}