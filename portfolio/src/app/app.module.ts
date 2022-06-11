import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormationElementComponent } from './components/formation-element/formation-element.component';
import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceElementComponent } from './components/experience-element/experience-element.component';
import { ModalComponent } from './components/modal/modal.component';


const routes: Routes = [
  {path: '', component: ExperiencesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarLinkComponent,
    WelcomePageComponent,
    FormationComponent,
    FormationElementComponent,
    ExperiencesComponent,
    ExperienceElementComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
