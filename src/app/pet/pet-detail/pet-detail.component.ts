import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PetsService } from '../../services/pets.service';
import { AuthService } from '../../auth/auth.service';
import { PetService } from '../pet.service';


@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})

export class PetDetailComponent implements OnInit {

  loggedin = false;
  pet_id = "";
  pet = null;

  constructor(
    private petsService: PetsService,
    private petService: PetService,
    private authService: AuthService
  ) {

  }

  ngOnInit () {
     this.loggedin = this.authService.getCurrentUser();

     // get selected pet_id from local storage, and then load from db.
    this.pet_id = localStorage.getItem('pet_id');
    console.log('X' + this.pet_id);

    this.petService.getOnePet(this.pet_id)
      .subscribe(data => {
        console.log('petService.getOnePet return');
        this.pet = data;
      });
  }
}
