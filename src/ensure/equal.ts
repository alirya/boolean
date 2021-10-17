import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/equal";

/**
 * Throw exception if given value is no boolean type
 */

export default function Equal<Compare extends unknown>(
    value : unknown,
    compare : Compare,
    error : (value:unknown)=>Error = ThrowableType
) : Compare {

    AssertType(value, compare, error)

    return value;
}


