import { trigger, state, style, animate, transition, group } from '@angular/animations';

export const carouselAnimation = trigger('carousel', [
  state('*', style({
    transform: 'translateX(0)'
  })),
  state('void', style({
    transform: 'translate(100%)'
  })),
  transition ('void => *',
  [
    style({
      transform: 'translateX(-100%)'
    }),
    animate('1000ms ease-in')
  ]),
  transition ('* => void',
  [
    animate('1000ms ease-out')
  ]),
]);

