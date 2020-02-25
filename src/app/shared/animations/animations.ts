import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('signIN => signUP', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 1 }),
          animate(
            '0.9s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            '0.8s ease-in-out',
            style({ transform: 'translateX(100%)', opacity: 0 })
          )
        ],
        { optional: true }
      )
    ])
  ]),
  transition('signUP => signIN', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)', opacity: 1 }),
          animate(
            '0.9s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            '0.8s ease-in-out',
            style({ transform: 'translateX(-100%)', opacity: 0 })
          )
        ],
        { optional: true }
      )
    ])
  ]),
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s ease-in-out', style({ opacity: 1 }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 }))
        ],
        { optional: true }
      )
    ])
  ])
  // transition('sign-in => sign-up', [
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
  //     optional: true
  //   }),
  //   group([
  //     query(
  //       ':enter',
  //       [
  //         style({ transform: 'translateX(-100%)' }),
  //         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //       ],
  //       { optional: true }
  //     ),
  //     query(
  //       ':leave',
  //       [
  //         style({ transform: 'translateX(0%)' }),
  //         animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //       ],
  //       { optional: true }
  //     )
  //   ])
  // ])
]);
