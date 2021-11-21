import ThrowableType from "../assert/throwable/boolean-parameter";
import AssertType from "../assert/equal-parameter";
import Value from "@dikac/t-value/value";
import EqualParameters from "./equal-parameters";

/**
 * Throw exception if given value is no boolean type
 */
export interface EqualArgument<Compare> extends Value<unknown> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}

export default function EqualParameter<Compare extends unknown>({
    value,
    compare,
    error = ThrowableType,
} : EqualArgument<Compare>) : Compare {

    return EqualParameters(value, compare, error)
}


