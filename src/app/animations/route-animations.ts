import {animate, animation, query, style} from '@angular/animations';

export const RouteAnimations = animation([
  // Initial state of new route
  query(':enter',
    style({
      position: 'fixed',
      width: '100%',
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    {optional: true}),

  // Initial state of old route
  query(':leave',
    style({
      position: 'fixed',
      width: '100%',
    }),
    {optional: true}),

  // move page off screen right on leave
  query(':leave',
    animate('300ms ease',
      style({
        transform: 'translateX(100%)'
      })
    ),
    {optional: true}),
  // move page in screen from left to right
  query(':enter',
    animate('300ms ease-in',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    ),
    {optional: true})
]);
