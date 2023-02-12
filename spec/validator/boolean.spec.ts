import Validator from '../../dist/validator/boolean.js';
import BooleanMessage from '../../dist/assert/string/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validator = Validator.Parameters(BooleanMessage.Parameters);
        const validatable = validator(<unknown>true);

        if(validatable.valid) {

            // compiler pass
            const boolean : boolean = validatable.value;
            expect(boolean).toBe(true);

        } else {

            // @ts-expect-error
            const boolean : boolean = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validator = Validator.Parameters(BooleanMessage.Parameters);
        const validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            const boolean : boolean = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            const boolean : boolean = validatable.value;
            // @ts-expect-error
            expect(boolean).toEqual({});
        }
    });

    it(`readonly`,function() {

        const validator = Validator.Parameters(BooleanMessage.Parameters);
        const validatable = validator(1);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message.js = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    const validator = Validator.Parameters(BooleanMessage.Parameters);
    const validatable = validator(false);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(false);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validator = Validator.Parameters(BooleanMessage.Parameters);
    const validatable = validator('a');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



