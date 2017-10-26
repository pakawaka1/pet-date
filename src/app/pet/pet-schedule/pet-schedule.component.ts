import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Pet } from '../pet-list/pet-list';
import { IHistory } from '../../user-profile/ihistory';
import { AuthService } from '../../auth/auth.service';
import { PetService } from '../pet.service'

@Component({
  selector: 'app-pet-schedule',
  templateUrl: './pet-schedule.component.html',
  styleUrls: ['./pet-schedule.component.css']
})
export class PetScheduleComponent implements OnInit, OnDestroy {
  loggedin = false;
  sub: any;
  pet;

  // pet = {
  //   photo: "pup6.jpg",
  //   name: "Fluffy",
  //   type: "dog",
  //   id: "abcd",
  //   size: "medium",
  //   energy: "medium",
  //   age: 2,
  //   rating: 5
  // };
  constructor(
    private petService: PetService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      console.log(params);
      let id = params['id'];
      this.pet = this.petService.getOnePet(id);
      console.log(this.pet);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
