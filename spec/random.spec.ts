import Random from '../dist/random';
it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatible', function() {

    for(let i = 0; i <= 10; i ++) {

        it(`test return`, () => {
            expect(typeof Random()).toBe('boolean');
        });
    }

});
