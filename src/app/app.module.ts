import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';

import { AppRoutingModule } from './app-routing.module';
import { CvModule } from './cv-page/cv.module';
import { CompetencesModule } from './competences-page/competences.module';
import { ExperiencesModule } from './experiences-page/experiences.module';
import { DegreesModule } from './degrees-page/degrees.module';

import { CvComponent } from './cv-page/cv/cv.component';
import { CvContainerComponent } from './cv-page/cv-container/cv-container.component';
import { CvLeftComponent } from './cv-page/cv-left/cv-left.component';
import { CvFormationsComponent } from './cv-page/cv-formations/cv-formations.component';
import { CvFormationComponent } from './cv-page/cv-formation/cv-formation.component';
import { SkillBarComponent } from './cv-page/skill-bar/skill-bar.component';
import { CvRightComponent } from './cv-page/cv-right/cv-right.component';
import { CvExperienceComponent } from './cv-page/cv-experience/cv-experience.component';
import { CvCompetenceComponent } from './cv-page/cv-competence/cv-competence.component';
import { CvCompetencesComponent } from './cv-page/cv-competences/cv-competences.component';
import { ParcoursScolaireComponent } from './cv-page/parcours-scolaire/parcours-scolaire.component';
import { DegreesComponent } from './degrees-page/degrees/degrees.component';
import { CoursesComponent } from './degrees-page/courses/courses.component';
import { CourseComponent } from './degrees-page/course/course.component';
import { CompetencesComponent } from './competences-page/competences/competences.component';
import { CompetencesBarComponent } from './competences-page/competences-bar/competences-bar.component';
import { CompetenceBarComponent } from './competences-page/competence-bar/competence-bar.component';
import { WildLifeComponent } from './experiences-page/wild-life/wild-life.component';
import { ExperiencesComponent } from './experiences-page/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvContainerComponent,
    CvLeftComponent,
    CvFormationsComponent,
    CvFormationComponent,
    SkillBarComponent,
    CvRightComponent,
    CvExperienceComponent,
    CvCompetenceComponent,
    CvCompetencesComponent,
    ParcoursScolaireComponent,
    HeaderComponent,
    TabComponent,
    DegreesComponent,
    CoursesComponent,
    CourseComponent,
    CompetencesComponent,
    CompetencesBarComponent,
    CompetenceBarComponent,
    WildLifeComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTabsModule,
    CvModule,
    CompetencesModule,
    ExperiencesModule,
    DegreesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
