import Equal from '../../dist/equal';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function() {

    let value : unknown = 'data';

    expect(Equal.Parameters(value, 'data')).toBe(true);
});
