import ThrowableType from './throwable/boolean-parameter';
import Callback from '@alirya/function/assert/callback-parameters';
import BooleanType from '../boolean';

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType,
) : asserts value is boolean {

    Callback(value, BooleanType, error);
}
