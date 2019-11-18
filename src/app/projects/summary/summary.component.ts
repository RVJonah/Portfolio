import { Component, OnInit } from '@angular/core';
import { slideUpDownAnimation } from 'src/app/animations/slide-up-down-animation';
import { scaleContentYAnimation } from 'src/app/animations/content-scale-animation';

@Component({
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss', '../projects-descendants-scss/projects-general.component.scss'],
  animations: [
    slideUpDownAnimation,
    scaleContentYAnimation
  ]
})
export class SummaryComponent implements OnInit {
  elementIsInDom: object;
  constructor() {
    this.elementIsInDom = {
      summary: false
    };
   }

  ngOnInit() {
    setTimeout(() => {this.elementIsInDom['summary'] = true; }, 400 );
  }

}
