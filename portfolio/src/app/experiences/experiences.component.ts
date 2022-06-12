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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
      year: 'Janvier 2022 - Juillet 2022',
      place: 'Paris, France',
      type: 'Stage',
      role: 'Développeur front-end',
      company: 'Ophelia Sensors',
      technologies: [
        'Angular',
        'Chart JS',
      ]
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
      year: 'Mai 2021 - Août 2021',
      place: 'Paris, France',
      type: 'Stage',
      role: 'Développeur front-end',
      company: 'Ophelia Sensors',
      technologies: [
        'Javascript',
        'OpenLayers',
        'Three JS',
        'ApexChart'
      ]
    },
    {
      id: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
      year: 'Octobre 2021 - Janvier 2022',
      place: 'Mulhouse, France',
      type: 'Projet',
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
    this.experienceSelected = this.listExperiences[id]
    document.getElementById('modal-experience')?.classList.add('visible')
  }

  getHeader(experience: any){
    return experience.type + " : " + experience.company
  }



}
