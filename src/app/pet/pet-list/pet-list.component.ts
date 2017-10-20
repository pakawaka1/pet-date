import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service'
import { Pet } from './pet-list'


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

 export class PetListComponent implements OnInit {

     sortFields = ["type", "size", "energy", "age", "rating"];
     pet: Pet;
     allPets: Pet[];

     constructor(private petsService: PetsService) {

     }

     ngOnInit () {
        this.petsService.getPets()
            .subscribe(allPets => {
                this.allPets = allPets;
             })
          console.log(this.allPets[0])
     }
 }
