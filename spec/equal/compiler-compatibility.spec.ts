import Equal from '../../dist/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function() {


    const value : unknown = 'data';

    if(Equal.Parameters(value, 'data')) {

        const data : string = value;

    } else {

        // @ts-expect-error
        const data : string = value;
    }

});
