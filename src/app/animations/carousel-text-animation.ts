import { trigger, state, style, animate, transition, group } from '@angular/animations';

export const carouselTextAnimation = trigger('carouselText', [
  state('*', style({
    transform: 'translate(0, 0)'
  })),
  state('void', style({
    transform: 'translate(120%, -1000%)'
  })),
  transition ('void => *',
  [
    style({
      transform: 'translate(-120%,1000%)'
    }),
    animate('1000ms ease-in')
  ]),
  transition ('* => void',
  [
    animate('1000ms ease-out')
  ]),
]);
