import Number from '../../../dist/assert/throwable/boolean-parameters';
import Message from '../../../dist/assert/string/boolean-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = Number(Infinity);
    expect(throwable.message).toBe(Message(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
