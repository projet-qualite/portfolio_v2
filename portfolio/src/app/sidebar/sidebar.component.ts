import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() linkEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  getLink(link: string){
    this.linkEvent.emit(link)
  }

}
