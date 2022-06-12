import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() body: string = ''
  @Input() header: string = ''
  @Input() link: string = ''
  @Input() technologies: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    const modals = document.getElementsByTagName('app-modal')
    for(let i = 0 ; i < modals.length; i++){
      modals[i].classList.remove('visible')
      modals[i].classList.add('hidden')
    }
  }

}
