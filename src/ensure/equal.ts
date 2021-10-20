import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/equal";
import Value from "@dikac/t-value/value";

/**
 * Throw exception if given value is no boolean type
 */
export interface Argument<Compare> extends Value<unknown> {
    compare:Compare;
    error?:(value:unknown)=>Error;
}

export default function Equal<Compare extends unknown>({
    value,
    compare,
    error = ThrowableType,
} : Argument<Compare>) : Compare {

    AssertType(value, {compare, error})

    return value;
}


