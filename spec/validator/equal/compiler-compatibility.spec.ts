import Equal from '../../../dist/validator/equal.js';
import EqualMessage from '../../../dist/assert/string/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    const validator = Equal.Parameters(1,  EqualMessage.Parameters);

    const equal = validator(2);

    if(equal.valid) {

        {
            const number : number = equal.value;
            const unknown : unknown = equal.value;
            //  @ts-expect-error
            const string : string = equal.value;
        }

        {
            const string : string = equal.message;
            //  @ts-expect-error
            const number : number = equal.message;
        }

    } else {

        {
            const number : number = equal.value;
            const unknown : unknown = equal.value;
            //  @ts-expect-error
            const string : string = equal.value;
        }

        {
            const string : string = equal.message;
            //  @ts-expect-error
            const number : number = equal.message;
        }
    }
});

it('explicit partial', function () {

    const validator = Equal.Parameters<number, number, string>(1,  EqualMessage.Parameters);

    const equal = validator(2);

    if(equal.valid) {

        {
            const specific : 2 = equal.value;
            const number : number = equal.value;
            const unknown : unknown = equal.value;
        }

        {
            const string : string = equal.message;
            //  @ts-expect-error
            const number : number = equal.message;
        }

    } else {

        {
            // @ts-expect-error
            const specific : 1 = equal.value;
            const number : number = equal.value;
            const unknown : unknown = equal.value;
        }

        {
            const string : string = equal.message;
            //  @ts-expect-error
            const number : number = equal.message;
        }
    }

});

it('explicit full', function () {

    const validator = Equal.Parameters<number, 1>(1,  EqualMessage.Parameters);

    const equal = validator(2);

    if(equal.valid) {

        const specific : 1 = equal.value;
        const number : number = equal.value;
        const unknown : unknown = equal.value;

    } else {

        const specific : 2 = equal.value;
        const number : number = equal.value;
        const unknown : unknown = equal.value;
    }

});
