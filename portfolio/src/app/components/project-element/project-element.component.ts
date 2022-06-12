import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() image: string = ''
  @Input() name: string = ''
  @Input() technologies: string[] = []
  

  constructor() { }

  ngOnInit(): void {
  }

  getImagePath(image: string){
    return "/assets/"+image
  }

}
