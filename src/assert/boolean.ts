import {BooleanParameters} from './throwable/boolean.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import BooleanType from '../boolean.js';

/**
 * Throw exception if given value is no boolean type
 */

export default function Boolean(
    value : unknown,
    error : (value:unknown)=>Error = BooleanParameters,
) : asserts value is boolean {

    CallbackParameters(value, BooleanType, error);
}
