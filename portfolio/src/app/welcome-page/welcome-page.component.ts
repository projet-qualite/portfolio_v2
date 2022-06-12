import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }


  downloadCV(){
    window.open('/assets/CV.pdf', '_blank');
  }

}
