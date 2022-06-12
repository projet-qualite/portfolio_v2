import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-element',
  templateUrl: './techno-element.component.html',
  styleUrls: ['./techno-element.component.scss']
})
export class TechnoElementComponent implements OnInit {

  @Input() image: string = '';
  @Input() name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getImagePath(){
    return "assets/"+this.image;
  }

}
