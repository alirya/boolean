import ThrowableType from '../assert/throwable/boolean-parameter';
import AssertType from '../assert/equal-parameters';

/**
 * Throw exception if given value is no boolean type
 */

export default function EqualParameters<Compare extends unknown>(
    value : unknown,
    compare : Compare,
    error : (value:unknown)=>Error = ThrowableType
) : Compare {

    AssertType(value, compare, error);

    return value;
}


