import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  allPets = [
    {
      "photo": "../assets/img/petphotos/sophie.jpg",
      "name": "Sophie",
      "type": "Dog",
      "size": "Small",
      "energy": "High",
      "age": "2 yrs",
      "rating": 4
    },
  {
    "photo": "../assets/img/petphotos/pup6.jpg",
    "name": "Sienna",
    "type": "Dog",
    "size": "Medium",
    "energy": "Medium",
    "age": "10 yrs",
    "rating": 5
  },
  {
    "photo": "../assets/img/petphotos/80.jpg",
    "name": "Tinta",
    "type": "Cat",
    "size": "Medium",
    "energy": "Medium",
    "age": "4 yrs",
    "rating": 4
  },
];

  constructor() { }

  ngOnInit() {
  }

}
