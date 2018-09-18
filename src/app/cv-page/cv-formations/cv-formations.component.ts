import { Component, OnInit } from '@angular/core';
import { formations } from '../data/cv-formation';

@Component({
  selector: 'app-cv-formations',
  templateUrl: './cv-formations.component.html',
  styleUrls: ['./cv-formations.component.scss']
})
export class CvFormationsComponent implements OnInit {

  formations = null;

  constructor() { }

  ngOnInit() {
    this.formations = formations;
  }

}
