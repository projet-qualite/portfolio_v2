import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormationElementComponent } from './components/formation-element/formation-element.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceElementComponent } from './components/experience-element/experience-element.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectElementComponent } from './components/project-element/project-element.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { ContactComponent } from './contact/contact.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", component: WelcomePageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

    WelcomePageComponent,
    FormationComponent,
    FormationElementComponent,
    ExperiencesComponent,
    ExperienceElementComponent,
    ModalComponent,
    ProjectsComponent,
    ProjectElementComponent,
    SidebarComponent,
    SidebarLinkComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
