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


  constructor(
    private petsService: PetsService,
    private petService: PetService,
    private authService: AuthService
  ) {

  }

  ngOnInit () {
     this.loggedin = this.authService.getCurrentUser()
  }
}
