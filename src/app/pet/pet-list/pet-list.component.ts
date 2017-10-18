import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  sortFields = ["type", "size", "energy", "age", "rating"];
  allPets = [
    {
      "photo": "../assets/img/petphotos/sophie.jpg",
      "name": "Sophie",
      "type": "Dog",
      "id": "A12345",
      "size": "Small",
      "energy": "High",
      "age": "2 yrs",
      "rating": 4
    },
  {
    "photo": "../assets/img/petphotos/pup6.jpg",
    "name": "Sienna",
    "type": "Dog",
    "id": "A12346",
    "size": "Medium",
    "energy": "Medium",
    "age": "10 yrs",
    "rating": 5
  },
  {
    "photo": "../assets/img/petphotos/80.jpg",
    "name": "Tinta",
    "type": "Cat",
    "id": "A12347",
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
