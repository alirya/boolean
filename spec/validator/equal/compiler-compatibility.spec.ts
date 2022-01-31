import Equal from '../../../dist/validator/equal-parameters';
import EqualMessage from '../../../dist/assert/string/equal-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    let validator = Equal(1,  EqualMessage);

    let equal = validator(2);

    if(equal.valid) {

        {
            let number : number = equal.value;
            let unknown : unknown = equal.value;
            //  @ts-expect-error
            let string : string = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expect-error
            let number : number = equal.message;
        }

    } else {

        {
            let number : number = equal.value;
            let unknown : unknown = equal.value;
            //  @ts-expect-error
            let string : string = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expect-error
            let number : number = equal.message;
        }
    }
});

it('explicit partial', function () {

    let validator = Equal<number, number, string>(1,  EqualMessage);

    let equal = validator(2);

    if(equal.valid) {

        {
            let specific : 2 = equal.value;
            let number : number = equal.value;
            let unknown : unknown = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expect-error
            let number : number = equal.message;
        }

    } else {

        {
            // @ts-expect-error
            let specific : 1 = equal.value;
            let number : number = equal.value;
            let unknown : unknown = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expect-error
            let number : number = equal.message;
        }
    }

});

it('explicit full', function () {

    let validator = Equal<number, 1>(1,  EqualMessage);

    let equal = validator(2);

    if(equal.valid) {

        let specific : 1 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {

        let specific : 2 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});
