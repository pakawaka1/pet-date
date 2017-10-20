import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service'
import { Pet } from './pet-list'


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

 export class PetListComponent {
     sortField = ["type", "size", "energy", "age", "rating"];
     pet: Pet;
     allPets: Pet[];

     constructor(private petsService: PetsService) {
         this.petsService.getPets()
             .subscribe(pet => {
                this.pet = pet;
             })
          console.log(this.pet)
     }
 }
