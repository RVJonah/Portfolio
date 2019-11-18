import { trigger, state, style, animate, transition } from '@angular/animations';

export const scaleContentYAnimation = trigger('scaleContentY', [
  state('*', style({
    transform: 'scaleY(1)',
    opacity: 1
  })),
  state('void', style({
    transform: 'scaleY(0)',
    opacity: 0
  })),
  transition ('void => *',
  [
    style({
      transform: 'scaleY(0)',
      opacity: 0
    }),
    animate('500ms ease-in')
  ]),
  transition ('* => void',
  [
    style({
      transform: 'scaleY(1)',
      opacity: 1,
    }),
    animate('100ms ease-out')
  ]),
]);
