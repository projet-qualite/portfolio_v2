import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  

  listExperiences = [
    {
      id: 1,
      description: `In order to validate my Master degree, am currently on my graduation internship at Netatmo, an iOT 
      company which build devices and software for smart home, i work as a front-end developper in a team of 12 people. 
      Am responsible for adding new features in their Web app. For example, I created new feature for 
      Velux app that will be call by the app as a Webview. The feature consists of allows the user to indicate if there is
      an air-conditioner in his room and decide which moment he wanted open or close his window.
      Also, i worked on the security app by migrating the app from Angular 8 to Angular 13 using state management with Ngrx
      `,
      year: 'January 2022 - July 2022',
      place: 'Boulogne-Billancourt, France',
      type: 'Graduation internship',
      role: 'Front-end developper',
      company: 'Netatmo',
      link: '',
      technologies: [
        'Angular',
        'Ngrx',
        'Rxjs',
        'Chart JS',
      ]
    },
    {
      id: 2,
      description: `From May 2021 to August 2021, i worked to Ophelia-Sensors as an intern. I worked as a front-end developper.
        I was responsible for adding features in their web applications and remake their showcase website.
        I have mainly work in Javascript
      `,
      year: 'May 2021 - August 2021',
      place: 'Paris, France',
      type: 'Intership',
      role: 'Front-end developper',
      company: 'Ophelia-Sensors',
      link: '',
      technologies: [
        'Javascript',
        'OpenLayers',
        'Three JS',
        'ApexChart'
      ]
    },
    {
      id: 3,
      description: `This project consists of creating a web plateform to manage a media library. The mains features were: - Create an account, login an account, manage
      different user permissions, borrow a media etc... We worked in pair on this project. You can find the github link just below.`,
      year: 'Octobre 2021 - Janvier 2022',
      place: 'Mulhouse, France',
      type: 'School Project',
      link: 'https://github.com/Yeperllow/gestionMediatheque.git',
      company: 'Université de Haute-Alsace',
      technologies: [
        'Spring boot',
        'Bootstrap'
      ]
    }
  ]

  experienceSelected: any = this.listExperiences[0]

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const {clientHeight} = document.documentElement
    const element = document.getElementsByClassName('animate')[0] as HTMLElement
    
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

  openModal(id: number){
    this.experienceSelected = this.listExperiences.filter(exp => exp.id === id)[0]
    document.getElementById('modal-experience')?.classList.add('visible')
  }

  getHeader(experience: any){
    return experience.type + " : " + experience.company
  }



}
