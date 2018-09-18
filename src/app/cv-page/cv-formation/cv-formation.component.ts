import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-formation',
  templateUrl: './cv-formation.component.html',
  styleUrls: ['./cv-formation.component.scss']
})
export class CvFormationComponent implements OnInit {

  @Input() index: number;
  @Input() isHalf: boolean;
  @Input() formationName: string;
  @Input() schoolName: string;
  @Input() date: number;

  constructor() { }

  ngOnInit() {
  }

}
