import Equal from '../../../dist/validatable/equal.js';
import EqualMessage from '../../../dist/assert/string/equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    const equal = Equal.Parameters<string>('1', 2, EqualMessage.Parameters);

    if(equal.valid) {
        // @ts-expect-error
        const number : number = equal.value;
        const unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        const number : number = equal.value;
        const unknown : unknown = equal.value;
    }

});

it('explicit partial', function () {

    const equal = Equal.Parameters<number>(1, 2, EqualMessage.Parameters);

    if(equal.valid) {

        // @ts-expect-error
        const specific : 2 = equal.value;
        // @ts-expect-error
        const number : number = equal.value;
        const unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        const specific : 1 = equal.value;
        const number : number = equal.value;
        const unknown : unknown = equal.value;
    }

});

it('explicit full', function () {

    const equal = Equal.Parameters<number, 2>(1, 2, EqualMessage.Parameters);

    if(equal.valid) {

        const specific : 2 = equal.value;
        const number : number = equal.value;
        const unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        const specific : 1 = equal.value;
        const number : number = equal.value;
        const unknown : unknown = equal.value;
    }

});
