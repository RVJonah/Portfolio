import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';

export const slideLeftToRightAnimation = trigger('slideLeftToRight', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':leave', [
      style ({
        position: 'absolute',
        transform: 'scale(0.5,0.5)'
      })
    ], {optional: true}),
    query(':enter', [
      style({
        position: 'absolute',
        width: '0%',
      })
    ]),
    group([
      query(':leave', [
        animate('500ms ease-out', style({
          transform: 'scale(0,0)'
        }))
      ], {optional: true}),
      query(':enter', [
        animate('500ms ease-in', style({
          width: '100%',
        }))
      ]),
    ]),
  ])
]);
