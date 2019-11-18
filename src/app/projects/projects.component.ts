import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideLeftToRightAnimation } from '../animations/left-to-right-animation';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    slideLeftToRightAnimation
  ]
})
export class ProjectsComponent implements OnInit {
  constructor() {
   }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit() {
  }

}
