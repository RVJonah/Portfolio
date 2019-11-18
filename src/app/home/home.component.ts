import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animatedElements: any;
  constructor() {
   }

  stopStartAnimation() {
    this.animatedElements.forEach(element => {
      if (element.style.animationPlayState === 'paused') {
        element.setAttribute('style', 'animation-play-state: running');
      } else {
        element.setAttribute('style', 'animation-play-state: paused');
      }
    });
  }

  ngOnInit() {
    this.animatedElements = document.querySelectorAll('.animated');
  }
}
