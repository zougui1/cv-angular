import { Component, OnInit } from '@angular/core';
import { competences } from '../data/cv-competences';

@Component({
  selector: 'app-cv-competences',
  templateUrl: './cv-competences.component.html',
  styleUrls: ['./cv-competences.component.scss']
})
export class CvCompetencesComponent implements OnInit {

  competences;

  constructor() { }

  ngOnInit() {
    this.competences = competences;
  }

}
