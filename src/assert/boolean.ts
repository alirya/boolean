import {BooleanParameters} from './throwable/boolean';
import {CallbackParameters} from '@alirya/function/assert/callback';
import BooleanType from '../boolean';

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : unknown,
    error : (value:unknown)=>Error = BooleanParameters,
) : asserts value is boolean {

    CallbackParameters(value, BooleanType, error);
}
