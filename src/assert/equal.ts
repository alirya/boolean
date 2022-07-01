import ThrowableType from './throwable/boolean';
import {CallbackParameters} from '@alirya/function/assert/callback';
import EqualValidation from '../equal';

/**
 * Throw exception if given value is not equal
 */

export function EqualParameters<Compare extends unknown>(
    value : unknown,
    compare : Compare,
    error : (value:unknown)=>Error = ThrowableType.Parameters
) : asserts value is Compare {

    CallbackParameters<unknown>(value, EqualValidation.Parameters, error, compare);
}


/**
 * Throw exception if given value is not equal
 */

export interface EqualArgument<Compare> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}


export function EqualParameter<Compare extends unknown>(
    value : unknown,
    {compare, error = ThrowableType.Parameter} : EqualArgument<Compare>,
) : asserts value is Compare {

   return EqualParameters(value, compare, error);
}


namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
