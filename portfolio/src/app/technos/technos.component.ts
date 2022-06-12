import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss']
})
export class TechnosComponent implements OnInit {

  technosList = [
    {
      name: "Angular",
      image: "angular.png"
    },
    {
      name: "Node JS",
      image: "node.png"
    },
    {
      name: "Spring boot",
      image: "spring.png"
    },
    {
      name: "Laravel",
      image: "laravel.png"
    },
    {
      name: "Flutter",
      image: "flutter.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
