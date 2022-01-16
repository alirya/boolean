import ThrowableType from './throwable/boolean-parameter';
import EqualParameters from './equal-parameters';

/**
 * Throw exception if given value is not equal
 */

export interface EqualParameterArgument<Compare> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}


export default function EqualParameter<Compare extends unknown>(
    value : unknown,
    {compare, error = ThrowableType} : EqualParameterArgument<Compare>,
) : asserts value is Compare {

   return EqualParameters(value, compare, error);
}
