import GuardFunction from '../function/guard.js';

export default interface Guard<Allow, Expect, Arguments extends unknown[] = []> {

    validation : GuardFunction<Allow, Expect, Arguments>;
}



