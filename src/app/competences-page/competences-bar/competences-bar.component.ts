import { Component, OnInit } from '@angular/core';
import { skills } from '../data/skills';

@Component({
  selector: 'app-competences-bar',
  templateUrl: './competences-bar.component.html',
  styleUrls: ['./competences-bar.component.scss']
})
export class CompetencesBarComponent implements OnInit {

  skills;

  constructor() { }

  ngOnInit() {
    this.skills = skills;
  }

}
