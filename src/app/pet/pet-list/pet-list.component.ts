import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { PetsService } from '../../services/pets.service';
import { Pet } from './pet-list';
import { AuthService } from '../../auth/auth.service';
import { PetService } from '../pet.service'


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

 export class PetListComponent implements OnInit {

     sortFields = ["type", "size", "energy", "age", "rating"];
     pet: Pet;
     allPets: Pet[];
     loggedin = false;

     constructor(
       private petsService: PetsService,
       private petService: PetService,
       private authService: AuthService
     ) {

     }

     ngOnInit () {
        this.loggedin = this.authService.getCurrentUser()
        this.petService.getPets()
            .subscribe(allPets => {
                this.allPets = allPets;
             })
          // console.log(this.allPets[0])
     }
 }
