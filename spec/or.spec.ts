import Or from "../dist/or";
it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


function Num(val : unknown) : val is number {

    return typeof val === "number";
}

function Str(val : unknown) : val is string {

    return typeof val === "string";
}


describe("compiler compatible", function() {

    let value : unknown = 1;

    if(Or(value, [Num])) {

        let result : number = value;
        // @ts-expect-error
        let result2 : string = value;

    } else {

        // @ts-expect-error
        let result1 : number = value;
        // @ts-expect-error
        let result2 : string = value;
    }

    if(Or(value, [Num, Str])) {

        let result : number|string = value;

        // @ts-expect-error
        let result2 : number = value;
        // @ts-expect-error
        let result3 : string = value;

    } else {

        // @ts-expect-error
        let result : number|string = value;
        // @ts-expect-error
        let result2 : number = value;
        // @ts-expect-error
        let result3 : string = value;
    }
});

describe("single", function() {

    let ab = 1;

    it(`one`, () => {

        expect(Or(ab, [Str])).toBeFalse();
        expect(Or(ab, [Num])).toBeTrue();
    });

});

describe("multi", function() {

    let num = 1;


    it(`number`, () => {
        expect(Or(num, [Num, Str])).toBeTrue();
    });

    let str = '1;';

    it(`string`, () => {
        expect(Or(str, [Str, Num])).toBeTrue();
    });

});

