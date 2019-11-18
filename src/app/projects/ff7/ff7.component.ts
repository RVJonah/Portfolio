import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideUpDownAnimation } from 'src/app/animations/slide-up-down-animation';
import { scaleContentYAnimation } from 'src/app/animations/content-scale-animation';

@Component({
  templateUrl: './ff7.component.html',
  styleUrls: ['./ff7.component.scss', '../projects-descendants-scss/projects-general.component.scss'],
  animations: [
    slideUpDownAnimation,
    scaleContentYAnimation
  ]
})
export class Ff7Component implements OnInit, OnDestroy {
  elementIsInDom: object;
  constructor() {
    this.elementIsInDom = {
      overview: false,
      tech: false,
      aims: false,
      learning: false,
      code: false,
    };
  }
  toggleElement(element) {
    this.elementIsInDom = {
      overview: false,
      tech: false,
      aims: false,
      learning: false,
      code: false,
    };
    this.elementIsInDom[element] = (this.elementIsInDom[element] === false ? true : false);
  }
  ngOnInit() {
    setTimeout(() => {this.toggleElement('overview'); }, 400);
  }
  ngOnDestroy() {
  }
}
