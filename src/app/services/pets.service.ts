import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PetsService {

	apipath = '/api/pets';

	constructor(private http: Http) {
		console.log('petsService');
	}

	getPets() {
		return this.http.get(this.apipath)
			.map(res => res.json());
	}
}