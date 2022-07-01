import ThrowableType from '../assert/throwable/boolean';
import AssertType from '../assert/boolean';
import Value from '@alirya/value/value';

/**
 * Throw exception if given value is no boolean type
 */

export function BooleanParameters(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType.Parameters
) : boolean {

    AssertType(value, error);

    return value;
}




/**
 * Throw exception if given value is no boolean type
 */

export interface BooleanArgument extends Value<unknown> {
    error?:(value:unknown)=>Error;
}

export function BooleanParameter({
    value,
    error = ThrowableType.Parameter
} : BooleanArgument) : boolean {

    return BooleanParameters(value, error);
}




namespace Boolean {
    export const Parameters = BooleanParameters;
    export const Parameter = BooleanParameter;
}
export default Boolean;
