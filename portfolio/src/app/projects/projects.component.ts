import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  
  projectsList = [
      {
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
        type: 'Plateforme de prise de rendez-vous',
        name: 'Doc et Moi',
        link: 'www.doc-et-moi.com',
        image: '',
        state: 'test phase',
        technologies: [
          'Laravel',
          'Flutter'
        ]
      },
      {
        id: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
        type: 'Application mobile de location de voiture',
        name: 'Rapidkar',
        link: 'www.rapidkar.com',
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

  constructor() { }

  ngOnInit(): void {
  }


  openModal(id: number){
    this.projectSelected = this.projectsList[id]
    console.log(document.getElementsByClassName('app-modal'));
    document.getElementById('modal-project')?.classList.add('visible')
  }

  
}