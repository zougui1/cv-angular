import { Component, Input, OnInit } from '@angular/core';
import { AnimationsService } from '../services/animations.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tabId: string;
  @Input() tabHref: string;
  @Input() tabName: string;

  constructor(private animationsService: AnimationsService) { }

  ngOnInit() {
  }

  onAnimations() {
    /*switch (this.tabId) {
      case 'tab-cv':
        this.animationsService.animation1();
        break;
      case 'tab-skill':
        this.animationsService.animation2();
        break;
      case 'tab-xp':
        tl3.timeScale(1);
        tl3.play();

        tl1.timeScale(10);
        tl1.reverse()
        tl2.timeScale(10);
        tl2.reverse()
        tl4.timeScale(10);
        tl4.reverse();
        break;
      case 'tab-diplome':
        tl4.timeScale(1);
        tl4.play();

        tl1.timeScale(10);
        tl1.reverse();
        tl2.timeScale(10);
        tl2.reverse();
        tl3.timeScale(10);
        tl3.reverse();
        break;

      default:
        break;
    }*/
  }

}
