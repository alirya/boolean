import Equal from '../../../dist/validatable/equal';
import EqualMessage from '../../../dist/assert/string/equal';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    let equal = Equal.Parameters<string>('1', 2, EqualMessage.Parameters);

    if(equal.valid) {
        // @ts-expect-error
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});

it('explicit partial', function () {

    let equal = Equal.Parameters<number>(1, 2, EqualMessage.Parameters);

    if(equal.valid) {

        // @ts-expect-error
        let specific : 2 = equal.value;
        // @ts-expect-error
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        let specific : 1 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});

it('explicit full', function () {

    let equal = Equal.Parameters<number, 2>(1, 2, EqualMessage.Parameters);

    if(equal.valid) {

        let specific : 2 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        let specific : 1 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});
