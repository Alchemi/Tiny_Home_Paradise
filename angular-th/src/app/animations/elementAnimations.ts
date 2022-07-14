import { animate, query, stagger, style, transition, trigger } from "@angular/animations";


export const ANIMATION_ELEMENT = 'element';
export const elementAnimations = trigger('elementAnimations', [

    transition(':enter, :increment, :decrement', [

        query(
        '.' + ANIMATION_ELEMENT,
        [
            style({opacity:0, transform: 'translateY(-15px)' }),
            stagger(75, [
                animate(
                    '0.5s ease-in-out',
                    style({ opacity:1, transform: 'translateY(0)'})
                ),
            ]),
        ],

        {optional: true}
        ),
    ]),


    transition(':leave', [

        query(
        '.' + ANIMATION_ELEMENT,
        [
            stagger(75, [
                animate(
                    '0.5s ease-in-out',
                    style({ opacity:1, transform: 'translateY(-15px)'}),
                ),
            ]),
        ],

        {optional: true}
        ),
    ]),


transition('* => *', [

    query(
    ':enter', 
    [
        style({ opacity:0, transform: 'translateY(-15px)' }),
        stagger(75, [
            animate(
                '0.5s ease-in-out',
                style({ opacity:1, transform: 'translateY(0)'})
            ),
        ]),
    ],

    {optional: true}
    ),
]),
    
])


