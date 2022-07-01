import Number from '../../../dist/assert/string/boolean';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});


it(`valid`, () => {
    expect(Number.Parameters( {}, true)).toBe('type is boolean.');
});

it(`invalid`, () => {
    expect(Number.Parameters( 1, false)).toBe('type must boolean, actual number.');
});
