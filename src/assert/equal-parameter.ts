import ThrowableType from "./throwable/boolean-parameter";
import Callback from "@dikac/t-function/assert/callback";
import EqualValidation from "../equal";
import EqualParameters from "./equal-parameters";

/**
 * Throw exception if given value is not equal
 */

export interface EqualArgument<Compare> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}


export default function EqualParameter<Compare extends unknown>(
    value : unknown,
    {compare, error = ThrowableType} : EqualArgument<Compare>,
) : asserts value is Compare {

   return EqualParameters(value, compare, error)
}
