import ThrowableType from "../assert/throwable/boolean-parameter";
import Value from "@alirya/value/value";
import EqualParameters from "./equal-parameters";

/**
 * Throw exception if given value is no boolean type
 */
export interface EqualParameterArgument<Compare> extends Value<unknown> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}

export default function EqualParameter<Compare extends unknown>({
    value,
    compare,
    error = ThrowableType,
} : EqualParameterArgument<Compare>) : Compare {

    return EqualParameters(value, compare, error)
}


