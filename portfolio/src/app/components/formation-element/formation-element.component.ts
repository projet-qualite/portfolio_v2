import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-element',
  templateUrl: './formation-element.component.html',
  styleUrls: ['./formation-element.component.scss']
})
export class FormationElementComponent implements OnInit {

  @Input() year: string = ''
  @Input() school: string = ''
  @Input() degree: string = ''
  @Input() result: string = ''
  @Input() place: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
