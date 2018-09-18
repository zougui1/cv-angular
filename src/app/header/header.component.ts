import { Component, ViewEncapsulation, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  top = 20;

  isOnTop: boolean = true;
  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {

      if (window.pageYOffset < this.top) this.isOnTop = true;
      else this.isOnTop = false;
    }


  /*tabs = [
    {
      id: 'tab-cv',
      href: '',
      name: 'à propos de moi',
      content: <app-cv></app-cv>
    },
    {
      id: 'tab-skill',
      href: 'competences',
      name: 'Compétences',
      content: <app-competences></app-competences>
    },
    {
      id: 'tab-xp',
      href: 'experiences',
      name: 'Expériences',
      content: <app-experiences></app-experiences>
    },
    {
      id: 'tab-diplome',
      href: 'degrees',
      name: 'Diplomes',
      content: <app-degrees></app-degrees>
    }
  ]*/

  constructor() { }

  ngOnInit() {
    //this.top = document.getElementById('tabGroup').offsetTop;
  }

  onScroll($event) {
    var link = $event;
    var offset = link.offset();
    var top = offset.top;
    console.log('scroll');

    if ($event.scrollTop() > top) {
      console.log('true');
      this.isOnTop = true;
      return '80%';
    } else {
      console.log('false');
      this.isOnTop = false;
      return '100%';
    }
  }

}
