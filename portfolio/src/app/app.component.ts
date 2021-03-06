import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private router: Router){}

  getLink($event: string){
      const sidebar = document.getElementsByClassName('sidebar')[0] as HTMLElement
  
      if(sidebar.classList.contains('visible')){
        sidebar.classList.remove('visible')
        sidebar.classList.add('unvisible')
        document.getElementsByClassName('icon-btn')[0].classList.toggle('change')
      }
    this.putAllAsUnselected()
    switch($event){
      case '':
        document.getElementsByTagName('app-sidebar-link')[0].classList.add('selected')
        break;

      case 'experiences':
        document.getElementsByTagName('app-sidebar-link')[1].classList.add('selected')
        break;


      case 'education':
        document.getElementsByTagName('app-sidebar-link')[2].classList.add('selected')
        break;

      case 'projects':
        document.getElementsByTagName('app-sidebar-link')[3].classList.add('selected')
        break;

      case 'technos':
        document.getElementsByTagName('app-sidebar-link')[4].classList.add('selected')
        break;

      case 'contacts':
        document.getElementsByTagName('app-sidebar-link')[5].classList.add('selected')
        break;
    }
  }

  putAllAsUnselected(){
    const elements = document.getElementsByTagName('app-sidebar-link')
    for(let i = 0 ; i < elements.length; i++){
      if(elements[i].classList.contains('selected')){
        elements[i].classList.remove('selected')
      }
    }
  }

  openSidebar(){
    const sidebar = document.getElementsByClassName('sidebar')[0] as HTMLElement
    const iconBtn = document.getElementsByClassName('icon-btn')[0]
    iconBtn.classList.toggle('change')

    

    if(sidebar.classList.contains('visible')){
      sidebar.classList.remove('visible')
      sidebar.classList.add('unvisible')
    }
    else{
      sidebar.classList.remove('unvisible')
      sidebar.classList.add('visible')
    }
    
  }


}
