import Guard from '../../dist/ensure/boolean';
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
        expect(Guard.Parameters(true)).toBeTrue();
    });

    it(`false`, () => {
        expect(Guard.Parameters(false)).toBeFalse();
    });

});

describe('string', function() {

    throws(`primitive`, ()=>{
        Guard.Parameters('str');
    });

    throws(`primitive`, ()=>{
        Guard.Parameters(new String('str'));
    });

});


describe('number', function() {

    throws(`primitive`, () => {
        Guard.Parameters(1);
    });

    throws(`nan`, () => {
        Guard.Parameters(NaN);
    });

});

describe('object', function() {

    throws(`plain`, () => {
        Guard.Parameters({});
    });

    throws(`instance`, () => {
        Guard.Parameters(new Map());
    });

});

describe('function', function() {

    throws(`anonymous `, () => {
        Guard.Parameters(function () {});
    });

    throws(`anonymous arrow`, () => {
        Guard.Parameters(()=>{});
    });

    throws(`named`, () => {
        Guard.Parameters(isNaN);
    });

});

describe('empty', function() {

    throws(`null `, () => {
        Guard.Parameters(null);
    });

    throws(`undefined`, () => {
        Guard.Parameters(undefined);
    });

});
