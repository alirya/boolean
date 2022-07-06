import Guard from '@alirya/function/boolean/guard.js';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('basic', () =>{

    const guard : Guard<unknown, string> = function(value : unknown) : value is string {

        return true;
    };

    it('valid', () =>{
        const valid = 'data';

        if(guard(valid)) {

            const string : string = valid;
            const unknown : unknown = valid;

        } else {

            const string : string = valid;
            const unknown : unknown = valid;
        }

    });

    it('invalid', () =>{

        const valid = 1;

        if(guard(valid)) {

            const string : string = valid;
            const unknown : unknown = valid;
            const number : number = valid;

        } else {

            // @ts-expect-error
            const string : string = valid;
            const number : number = valid;
            const unknown : unknown = valid;
        }

    });

    it('unknown', () =>{

        const valid = <unknown>1;

        if(guard(valid)) {

            const string : string = valid;
            const unknown : unknown = valid;

        } else {

            // @ts-expect-error
            const string : string = valid;
            const unknown : unknown = valid;
        }

    });
});
