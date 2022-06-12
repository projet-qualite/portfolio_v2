import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() linkEvent = new EventEmitter()

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const {clientHeight} = document.documentElement
    const elements = document.getElementsByTagName('app-sidebar-link')
    const appEls = document.getElementsByClassName('app-el')

    for(let i = 0; i < appEls.length; i++){

      if(appEls[i] !== null){
        
        const element = appEls[i] as HTMLElement
        const yElementToViewport = element.getBoundingClientRect().y
        const heightElementToViewport = element.getBoundingClientRect().height
        if(clientHeight > (yElementToViewport + heightElementToViewport*2/3)){
          this.removeSelectedClass()
          elements[i].classList.add('selected')
        }
      }

    }

  }
  
  constructor() { }

  ngOnInit(): void {
  }


  getLink(link: string){
    this.linkEvent.emit(link)
  }


  removeSelectedClass(){
    const elements = document.getElementsByTagName('app-sidebar-link')

    for(let i = 0; i < elements.length; i++){

      if(elements[i].classList.contains('selected')){
        elements[i].classList.remove('selected')
      }

    }
  }

}
