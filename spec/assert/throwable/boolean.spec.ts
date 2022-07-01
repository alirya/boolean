import Number from '../../../dist/assert/throwable/boolean';
import Message from '../../../dist/assert/string/boolean';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it(`check value`, () => {
    let throwable = Number.Parameters(Infinity);
    expect(throwable.message).toBe(Message.Parameters(Infinity, false));
    expect(throwable).toBeInstanceOf(Error);
});
