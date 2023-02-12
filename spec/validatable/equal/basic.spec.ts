import Equal from '../../../dist/validatable/equal.js';
import EqualMessage from '../../../dist/assert/string/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('valid', function () {

    const equal = Equal.Parameters(1, 1, EqualMessage.Parameters);

    expect(equal.valid).toBe(true);
    expect(equal.value).toBe(1);
    expect(typeof equal.message).toBe('string');

});

it('invalid', function () {

    const equal = Equal.Parameters(1, 2, EqualMessage.Parameters);

    expect(equal.valid).toBe(false);
    expect(equal.value).toBe(1);
    expect(typeof equal.message).toBe('string');

});
