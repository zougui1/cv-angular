import { Component, OnInit } from '@angular/core';
import { courses2017 } from '../data/courses-2017';
import { courses2018 } from '../data/courses-2018';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses2017;
  courses2018;

  constructor() { }

  ngOnInit() {
    this.courses2017 = courses2017;
    this.courses2018 = courses2018;
  }

}
