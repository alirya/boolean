import Boolean from '../../../dist/assert/string/boolean';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('true',() =>{

    it(`valid`, () => {
        expect(Boolean.Parameter({value:true, valid:true})).toBe('type is boolean.');
    });

    it(`invalid`, () => {
        expect(Boolean.Parameter({value:-Infinity, valid:true})).toBe('type is boolean.');
    });
});

describe('false',() =>{

    it(`valid`, () => {
        expect(Boolean.Parameter({value:false, valid:false})).toBe('type must boolean, actual boolean.');
    });

    it(`invalid`, () => {
        expect(Boolean.Parameter({value:-Infinity, valid:false})).toBe('type must boolean, actual number.');

    });
});

