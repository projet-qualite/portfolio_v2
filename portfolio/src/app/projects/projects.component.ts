import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  
  projectsList = [
      {
        id: 1,
        description: ` Doc & Moi, is a web and mobile Ivorian platform that allow to make an appointment to the doctor, 
        I've been started to work on this since May 2021, it's currently in test phase.
        3 differents users are managed by the platform: Doctor, Hospital, Patient
        The mains features are: Create an account as a doctor or an hospital or a patient, login an account, Create a time slot, make an appointement, cancel etc...
        `,
        type: 'Web & Mobile',
        name: 'Doc et Moi',
        link: 'https://www.doc-et-moi.com',
        image: 'doc.png',
        state: 'test phase',
        technologies: [
          'Laravel',
          'Flutter'
        ]
      },
      {
        id: 2,
        description: `Rapidkar is an Ivorian startup of linking of customers and sellers to rent or sell cars.
        The website already exists and am responsible for making the mobile app.
        To make that, i first created an api with Laravel and start to integrate this to the app am making in Flutter.
        It's currently in developpment phase.
        `,
        type: 'Mobile app to rent or sell cars',
        name: 'Rapidkar',
        link: 'https://www.rapidkar.com',
        image: 'rapidkar.png',
        state: 'in progress',
        technologies: [
          'Laravel',
          'Flutter'
        ]
      },
      {
        id: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
        type: 'Application Web et mobile visant à digitaliser le process de livraison',
        name: 'LIV',
        state: 'in progress',
        image: '',
        technologies: [
          'Angular',
          'NodeJS',
          'Socket io',
          'Flutter',
        ]
      },
  ]

  projectSelected: any = this.projectsList[0]


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const {clientHeight} = document.documentElement
    const elements = document.getElementsByClassName('animate')

    for(let i = 2; i < elements.length;i++){

      if(elements[i] !== null){
        const element = elements[i] as HTMLElement
        
        const yElementToViewport = element.getBoundingClientRect().y
        const heightElementToViewport = element.getBoundingClientRect().height
  
        if(clientHeight > (yElementToViewport + heightElementToViewport*2/3)){
          element.style.animation = "spanFadeIn 1s forwards cubic-bezier(0.87, 0, 0.13, 1)"
        }
      }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }


  openModal(id: number){
    this.projectSelected = this.projectsList.filter(proj => proj.id === id)[0]
    document.getElementById('modal-project')?.classList.add('visible')
  }

  
}
