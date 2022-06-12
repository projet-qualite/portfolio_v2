import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-element',
  templateUrl: './experience-element.component.html',
  styleUrls: ['./experience-element.component.scss']
})
export class ExperienceElementComponent implements OnInit {

  @Input() id: number = 0
  @Input() year: string = ''
  @Input() company: string = ''
  @Input() type: string = ''
  @Input() place: string = ''
  @Input() link: string = ''
  @Output() openDetail = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
