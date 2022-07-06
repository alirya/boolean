import Equal from '../../dist/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function() {


    let value : unknown = 'data';

    if(Equal.Parameters(value, 'data')) {

        let data : string = value;

    } else {

        // @ts-expect-error
        let data : string = value;
    }

});
