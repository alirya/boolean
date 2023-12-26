import Validator from '@axiona/validator/simple.js';
import NumberValidatable from '../validatable/boolean.js';
import Validatable from '@axiona/validator/validatable/validatable.js';
import BooleanString from '../assert/string/boolean.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';

/**
 * {@see Validator} for boolean type
 */
export function BooleanParameters() : Validator<any, boolean, string>;

export function BooleanParameters<MessageType>(
    message : ValidatableParameters<any, MessageType>
) : Validator<any, boolean, MessageType>;

export function BooleanParameters<MessageType>(
    message : ValidatableParameters<any, MessageType|string> = BooleanString.Parameters
) : Validator<any, boolean, MessageType|string> {

    return function (value) {

        return  NumberValidatable.Parameters(value, message);

    } as Validator<any, boolean, MessageType|string>;

}


/**
 * {@see Validator} for boolean type
 */
export function BooleanParameter() : Validator<any, boolean, string>;

export function BooleanParameter<MessageType>(
    message : ValidatableParameter<any, MessageType>
) : Validator<any, boolean, MessageType>;

export function BooleanParameter<MessageType>(
    message : ValidatableParameter<any, MessageType|string> = BooleanString.Parameter
) : Validator<any, boolean, MessageType|string> {

    return BooleanParameters((value, valid) => message({value, valid}));

}


namespace Boolean {
    export const Parameters = BooleanParameters;
    export const Parameter = BooleanParameter;
}
export default Boolean;
