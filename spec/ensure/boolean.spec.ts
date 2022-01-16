import Guard from '../../dist/ensure/boolean-parameters';
it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

function throws (message : string, callback : () => any) {

    try {

        callback();
        fail(message);

    } catch (e) {

        it(message, () => {
            expect(e).toBeInstanceOf(Error);
        });
    }

}


describe('boolean', function() {

    it(`true`, () => {
        expect(Guard(true)).toBeTrue();
    });

    it(`false`, () => {
        expect(Guard(false)).toBeFalse();
    });

});

describe('string', function() {

    throws(`primitive`, ()=>{
        Guard('str');
    });

    throws(`primitive`, ()=>{
        Guard(new String('str'));
    });

});


describe('number', function() {

    throws(`primitive`, () => {
        Guard(1);
    });

    throws(`nan`, () => {
        Guard(NaN);
    });

});

describe('object', function() {

    throws(`plain`, () => {
        Guard({});
    });

    throws(`instance`, () => {
        Guard(new Map());
    });

});

describe('function', function() {

    throws(`anonymous `, () => {
        Guard(function () {});
    });

    throws(`anonymous arrow`, () => {
        Guard(()=>{});
    });

    throws(`named`, () => {
        Guard(isNaN);
    });

});

describe('empty', function() {

    throws(`null `, () => {
        Guard(null);
    });

    throws(`undefined`, () => {
        Guard(undefined);
    });

});
