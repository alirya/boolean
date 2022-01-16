import Equal from "../../../dist/validator/equal-parameters";
import EqualMessage from "../../../dist/assert/string/equal-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    let validator = Equal(1,  EqualMessage)

    let equal = validator(2);

    if(equal.valid) {

        {
            let number : number = equal.value;
            let unknown : unknown = equal.value;
            //  @ts-expecerror
            let string : string = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expecerror
            let number : number = equal.message;
        }

    } else {

        {
            let number : number = equal.value;
            let unknown : unknown = equal.value;
            //  @ts-expecerror
            let string : string = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expecerror
            let number : number = equal.message;
        }
    }
});

describe('explicit partial', function () {

    let validator = Equal<number, number, string>(1,  EqualMessage)

    let equal = validator(2);

    if(equal.valid) {

        {
            let specific : 2 = equal.value;
            let number : number = equal.value;
            let unknown : unknown = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expecerror
            let number : number = equal.message;
        }

    } else {

        {
            // @ts-expecerror
            let specific : 1 = equal.value;
            let number : number = equal.value;
            let unknown : unknown = equal.value;
        }

        {
            let string : string = equal.message;
            //  @ts-expecerror
            let number : number = equal.message;
        }
    }

});

describe('explicit full', function () {

    let validator = Equal<number, 1>(1,  EqualMessage)

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
