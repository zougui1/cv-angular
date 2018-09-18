import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() school: string;
  @Input() url: string;
  @Input() name: string;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
