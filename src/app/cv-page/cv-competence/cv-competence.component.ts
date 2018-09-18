import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-competence',
  templateUrl: './cv-competence.component.html',
  styleUrls: ['./cv-competence.component.scss']
})
export class CvCompetenceComponent implements OnInit {

  @Input() competenceName: string;
  @Input() index: number;
  @Input() isHalf: boolean;

  constructor() { }

  ngOnInit() {
  }

}
