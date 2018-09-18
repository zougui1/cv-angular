import { Injectable } from '@angular/core';
import '../../assets/js/tweenmax.min.js';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  /*
  cvElement = $('.cv-container');
  sideLeft = $('.cv-left');
  skillBar1 = $('.skill-bar.1');
  skillBar2 = $('.skill-bar.2');
  createdSite = $('.cv-site-created');
  tl1 = new TimelineLite();

  container = $('.container');
  progressBar = this.container.find($('.progress'));
  wildLifeSection = $('.wild-life-section');
  tl2 = new TimelineLite();

  constructor() { }

  animation1() {
    this.tl1.from(this.cvElement, 0.7, {
      height: 0
    })
    .from(this.sideLeft, 0.3, {
      width: 0,
      padding: 0
    })
    .staggerFrom(this.skillBar1.find('.cv-skill'), 0.2, {
      marginLeft: -100,
      autoAlpha: 0,
      skewX: -150
    }, 0.02)
    .from(this.createdSite.find('.cv-img'), 0.2, {
      scale: 0
    })
    .staggerFrom(this.skillBar2.find('.cv-skill'), 0.2, {
      marginLeft: -100,
      autoAlpha: 0,
      skewX: -150
    }, 0.02)
    .pause();
  }

  animation2() {
    this.tl2.staggerFrom(this.progressBar.find('.determinate'), 0.4, {
      width: 0
    }, 0.15)
    .staggerFrom(this.progressBar.find('h5'), 0.2, {
      autoAlpha: 0
    }, 0.15, '0.5')
    .staggerFrom(this.wildLifeSection.find('.element'), 0.2, {
      scale: 0,
      autoAlpha: 0
    }, 0.2, (0.2 * 11))
    .pause();
  }
  */
}
