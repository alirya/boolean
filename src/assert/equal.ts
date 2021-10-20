import ThrowableType from "./throwable/boolean";
import Callback from "@dikac/t-function/assert/callback";
import EqualValidation from "../equal";
import Value from "@dikac/t-value/value";

/**
 * Throw exception if given value is not equal
 */

export interface Argument<Compare> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}


export default function Equal<Compare extends unknown>(
    value : unknown,
    {compare, error = ThrowableType} : Argument<Compare>,
) : asserts value is Compare {

    Callback<unknown>(value, {validation: EqualValidation, error, argument:[compare]});
}
