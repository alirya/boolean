import Boolean from '../../../dist/assert/string/boolean-parameter';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('true',() =>{

    it(`valid`, () => {
        expect(Boolean({value:true, valid:true})).toBe('type is boolean.');
    });

    it(`invalid`, () => {
        expect(Boolean({value:-Infinity, valid:true})).toBe('type is boolean.');
    });
});

describe('false',() =>{

    it(`valid`, () => {
        expect(Boolean({value:false, valid:false})).toBe('type must boolean, actual boolean.');
    });

    it(`invalid`, () => {
        expect(Boolean({value:-Infinity, valid:false})).toBe('type must boolean, actual number.');

    });
});

