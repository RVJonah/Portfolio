import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation } from 'src/app/animations/slide-up-down-animation';
import { scaleContentYAnimation } from 'src/app/animations/content-scale-animation';

@Component({
  selector: 'app-flack',
  templateUrl: './flack.component.html',
  styleUrls: ['./flack.component.scss', '../projects-descendants-scss/projects-general.component.scss'],
  animations: [
    slideUpDownAnimation,
    scaleContentYAnimation
  ]
})
export class FlackComponent implements OnInit {

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
}

