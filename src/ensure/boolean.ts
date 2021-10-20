import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/boolean";
import Value from "@dikac/t-value/value";

/**
 * Throw exception if given value is no boolean type
 */

export interface Argument extends Value<unknown> {
    error?:(value:unknown)=>Error;
}

// export default function Boolean(
//     value : unknown,
//     error : (value:unknown)=>Error = ThrowableType
// ) : boolean {
//
//     AssertType(value, error)
//
//     return value;
// }

export default function Boolean({value, error = ThrowableType} : Argument) : boolean {

    AssertType(value, error)

    return value;
}


