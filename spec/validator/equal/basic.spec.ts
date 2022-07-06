import EqualMessage from '../../../dist/assert/string/equal.js';
import Equal from '../../../dist/validator/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('valid', function () {

    let validator = Equal.Parameters(1,  EqualMessage.Parameters);

    let equal = validator(1);

    expect(equal.valid).toBe(true);
    expect(equal.value).toBe(1);
    expect(typeof equal.message).toBe('string');

});

it('invalid', function () {

    let validator = Equal.Parameters(1,  EqualMessage.Parameters);

    let equal = validator(2);

    expect<boolean>(equal.valid).toBe(false);
    expect(equal.value).toBe(2);
    expect(typeof equal.message).toBe('string');

});
