import Validator from "../../dist/validatable/boolean-parameters";
import BooleanMessage from "../../dist/assert/string/boolean-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator(<unknown>false, BooleanMessage);

        if(validatable.valid) {

            // compiler pass
            let boolean : boolean = validatable.value;
            expect(boolean).toBe(false);

        } else {

            // @ts-expecerror
            let boolean : boolean = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validatable = Validator(<unknown>{}, BooleanMessage);

        if(validatable.valid) {

            // compiler pass
            let boolean : boolean = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expecerror
            let boolean : boolean = validatable.value;
            // @ts-expecerror
            expect(boolean).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = Validator(<unknown>1, BooleanMessage);;

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validatable = Validator(true, BooleanMessage);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(true);
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validatable = Validator('a', BooleanMessage);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe("string");

});



