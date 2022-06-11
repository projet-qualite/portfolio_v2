import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() body: string = ''
  @Input() header: string = ''
  @Input() technologies: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    document.getElementsByTagName('app-modal')[0].classList.remove('visible')
    document.getElementsByTagName('app-modal')[0].classList.add('hidden')
  }

}
