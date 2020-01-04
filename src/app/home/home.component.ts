import { Component, OnInit } from '@angular/core';
import { ICarousel } from '../shared/carousel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animatedElements: any;
  vetCalcImages: ICarousel[];
  constructor() {
    this.vetCalcImages = vetCalcImageArray;
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

const vetCalcImageArray = [ {
  src: '../../assets/images/vet-calc/landing-page.png',
  alt: 'veterinary calculations landing page',
  inView: false,
  text: 'Delivering high quality web development'
},
{
  src: '../../assets/images/vet-calc/liquids.png',
  alt: 'veterinary calculations liquid calculations page',
  inView: false,
  text: 'Beautiful fully mobile responsive web layouts'
},
{
  src: '../../assets/images/vet-calc/login.png',
  alt: 'veterinary calculations login page',
  inView: false,
  text: 'User Login systems'
},
{
  src: '../../assets/images/vet-calc/tablets.png',
  alt: 'veterinary calculations tablets calculations page',
  inView: false,
  text: 'Clear and simple UIs'
},
{
  src: '../../assets/images/vet-calc/theatre.png',
  alt: 'veterinary calculations theatre page',
  inView: false,
  text: 'Full stack development available'
}
];
