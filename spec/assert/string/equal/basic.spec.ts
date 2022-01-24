import Equal from '../../../../dist/assert/string/equal-parameter';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`true`, () => {
    expect(Equal({value:'a', compare:'a', valid:true})).toBe('\'a\' is equal to \'a\'.');
    expect(Equal({value:null, compare:'', valid:true})).toBe('\'\' is equal to \'\'.');
});

it(`false`, () => {
    expect(Equal({value:{}, compare:{}, valid:false})).toBe('\'[object Object]\' is not equal to \'[object Object]\'.');
    expect(Equal({value:1, compare: 1, valid:false})).toBe('\'1\' is not equal to \'1\'.');
});
