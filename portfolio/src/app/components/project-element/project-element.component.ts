import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() image: string = ''
  @Input() id: number = 0
  @Input() name: string = ''
  @Input() technologies: string[] = []
  @Output() openDetail = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }

  getImagePath(image: string){
    return "/assets/"+image
  }

}
