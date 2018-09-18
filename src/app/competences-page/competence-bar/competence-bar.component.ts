import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competence-bar',
  templateUrl: './competence-bar.component.html',
  styleUrls: ['./competence-bar.component.scss']
})
export class CompetenceBarComponent implements OnInit {

  @Input() competenceName: string;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
