import Equal from '../../dist/equal';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {


    let value : unknown = 'data';

    if(Equal(value, 'data')) {

        let data : string = value;

    } else {

        // @ts-expecerror
        let data : string = value;
    }

});
