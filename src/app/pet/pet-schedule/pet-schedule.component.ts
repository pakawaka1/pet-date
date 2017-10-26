import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
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
  loggedin = false;
  pet_id = "";
  pet = Pet;

  constructor(
    private petService: PetService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }

  onLoginSubmit() {
    console.log('submitting');
  }

  ngOnInit() {
    this.loggedin = this.authService.getCurrentUser();
    this.pet_id = this.route.snapshot.params['id'];
    console.log("pet id: " + this.pet_id);

    this.petService.getOnePet(this.pet_id)
      .subscribe(data => {
        console.log('petService.getOnePet return');
        this.pet = data;
      });

}
}
