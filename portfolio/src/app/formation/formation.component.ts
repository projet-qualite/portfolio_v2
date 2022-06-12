import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const {clientHeight} = document.documentElement
    const element = document.getElementsByClassName('animate')[1] as HTMLElement
    
    if(element !== null){
      const yElementToViewport = element.getBoundingClientRect().y
      const heightElementToViewport = element.getBoundingClientRect().height

      if(clientHeight > (yElementToViewport + heightElementToViewport*2/3)){
        element.style.animation = "spanFadeIn 1s forwards cubic-bezier(0.87, 0, 0.13, 1)"
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
