import Guard from "@alirya/function/boolean/guard";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('basic', () =>{

    const guard : Guard<unknown, string> = function(value : unknown) : value is string {

        return true;
    }

    describe('valid', () =>{
        const valid = 'data';

        if(guard(valid)) {

            const string : string = valid;
            const unknown : unknown = valid;

        } else {

            const string : string = valid;
            const unknown : unknown = valid;
        }

    });

    describe('invalid', () =>{

        const valid = 1;

        if(guard(valid)) {

            const string : string = valid;
            const unknown : unknown = valid;
            const number : number = valid;

        } else {

            // @ts-expecerror
            const string : string = valid;
            const number : number = valid;
            const unknown : unknown = valid;
        }

    });

    describe('unknown', () =>{

        const valid = <unknown>1;

        if(guard(valid)) {

            const string : string = valid;
            const unknown : unknown = valid;

        } else {

            // @ts-expecerror
            const string : string = valid;
            const unknown : unknown = valid;
        }

    });
})
