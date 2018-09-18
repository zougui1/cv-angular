import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { CvComponent } from './cv/cv.component';
import { CvContainerComponent } from './cv-container/cv-container.component';
import { CvLeftComponent } from './cv-left/cv-left.component';
import { CvFormationsComponent } from './cv-formations/cv-formations.component';
import { CvFormationComponent } from './cv-formation/cv-formation.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { CvRightComponent } from './cv-right/cv-right.component';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';
import { CvCompetenceComponent } from './cv-competence/cv-competence.component';
import { CvCompetencesComponent } from './cv-competences/cv-competences.component';
import { ParcoursScolaireComponent } from './parcours-scolaire/parcours-scolaire.component';

import { competences } from './data/cv-competences';
import { formations } from './data/cv-formation';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    /*CvComponent,
    CvContainerComponent,
    CvLeftComponent,
    CvFormationsComponent,
    CvFormationComponent,
    SkillBarComponent,
    CvRightComponent,
    CvExperienceComponent,
    CvCompetenceComponent,
    CvCompetencesComponent,
    ParcoursScolaireComponent*/
  ],
  exports: [
    MatButtonModule
  ]
})
export class CvModule { }
