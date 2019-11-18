import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideUpDownAnimation = trigger('slideUpDown', [
  state('true', style({
    height: '*',
  })),
  state('void', style({
    height: 0,
  })),
  transition ('void => true',
  [
    style({
      height: 0,
    }),
    animate('300ms ease-in')
  ]),
  transition ('true => void',
  [
    style({
      height: '*',
    }),
    animate('300ms ease-out')
  ])
]);
