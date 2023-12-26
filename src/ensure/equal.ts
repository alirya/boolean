import ThrowableType from '../assert/throwable/boolean.js';
import {EqualParameters as AssertEqualParameters} from '../assert/equal.js';
import Value from '@axiona/value/value.js';

/**
 * Throw exception if given value is no boolean type
 */

export function EqualParameters<Compare extends unknown>(
    value : unknown,
    compare : Compare,
    error : (value:unknown)=>Error = ThrowableType.Parameters
) : Compare {

    AssertEqualParameters(value, compare, error);

    return value;
}



/**
 * Throw exception if given value is no boolean type
 */
export interface EqualArgument<Compare> extends Value<unknown> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}

export function EqualParameter<Compare extends unknown>({
    value,
    compare,
    error = ThrowableType.Parameter,
} : EqualArgument<Compare>) : Compare {

    return EqualParameters(value, compare, error);
}




namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
