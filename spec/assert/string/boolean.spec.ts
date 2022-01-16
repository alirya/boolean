import Number from '../../../dist/assert/string/boolean-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`valid`, () => {
    expect(Number( {}, true)).toBe('type is boolean.');
});

it(`invalid`, () => {
    expect(Number( 1, false)).toBe('type must boolean, actual number.');
});
