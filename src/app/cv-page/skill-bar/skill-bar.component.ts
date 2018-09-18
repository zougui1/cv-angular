import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {

  @Input() index: number;
  @Input() isHalf: boolean;

  spanList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit() {
  }

}
