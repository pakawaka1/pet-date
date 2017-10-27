import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Pet } from '../pet-list/pet-list';
import { IHistory } from '../../user-profile/ihistory';
import { AuthService } from '../../auth/auth.service';
import { PetService } from '../pet.service'

@Component({
  selector: 'app-pet-schedule',
  templateUrl: './pet-schedule.component.html',
  styleUrls: ['./pet-schedule.component.css']
})
export class PetScheduleComponent implements OnInit {
  loggedin: any;
  pet_id = "";
  pet: Pet;
  history: IHistory;

  constructor(
    private petService: PetService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  onLoginSubmit(date, activity) {
    console.log("submitting form");
    const history = {
      pet_id: this.pet.id,
      user_id: this.loggedin.id,
      petname: this.pet.name,
      date: date,
      activity: activity,
      rating: ""
    };
    console.log(history);
    this.authService.saveHistory(history)
      .subscribe(data => {
        console.log(data);
      });
      this.router.navigate(['/profile']);
  }

  ngOnInit() {
    this.loggedin = this.authService.getCurrentUser();
    this.pet_id = this.route.snapshot.params['id'];
    this.petService.getOnePet(this.pet_id)
      .subscribe(data => {
        this.pet = data;
      });

}
}
