import Validator from '../../dist/validatable/boolean.js';
import BooleanMessage from '../../dist/assert/string/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator.Parameters(<unknown>false, BooleanMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            let boolean : boolean = validatable.value;
            expect(boolean).toBe(false);

        } else {

            // @ts-expect-error
            let boolean : boolean = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validatable = Validator.Parameters(<unknown>{}, BooleanMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            let boolean : boolean = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let boolean : boolean = validatable.value;
            // @ts-expect-error
            expect(boolean).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = Validator.Parameters(<unknown>1, BooleanMessage.Parameters);

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
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validatable = Validator.Parameters(true, BooleanMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(true);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = Validator.Parameters('a', BooleanMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



