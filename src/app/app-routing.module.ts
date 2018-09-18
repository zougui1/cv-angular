import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv-page/cv/cv.component';
import { CompetencesComponent } from './competences-page/competences/competences.component';
import { ExperiencesComponent } from './experiences-page/experiences/experiences.component';
import { DegreesComponent } from './degrees-page/degrees/degrees.component';

const appRoutes: Routes = [
  { path: '', component: CvComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'degrees', component: DegreesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
