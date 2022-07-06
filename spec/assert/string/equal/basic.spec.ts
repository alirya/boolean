import Equal from '../../../../dist/assert/string/equal.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`true`, () => {
    expect(Equal.Parameter({value:'a', compare:'a', valid:true})).toBe('\'a\' is equal to \'a\'.');
    expect(Equal.Parameter({value:null, compare:'', valid:true})).toBe('\'\' is equal to \'\'.');
});

it(`false`, () => {
    expect(Equal.Parameter({value:{}, compare:{}, valid:false})).toBe('\'[object Object]\' is not equal to \'[object Object]\'.');
    expect(Equal.Parameter({value:1, compare: 1, valid:false})).toBe('\'1\' is not equal to \'1\'.');
});
