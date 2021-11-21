import ThrowableType from "../assert/throwable/boolean-parameter";
import AssertType from "../assert/boolean";

/**
 * Throw exception if given value is no boolean type
 */

export default function BooleanParameters(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : boolean {

    AssertType(value, error)

    return value;
}


