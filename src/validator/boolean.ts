import Validator from '@alirya/validator/simple.js';
import NumberValidatable from '../validatable/boolean.js';
import Validatable from '@alirya/validator/validatable/validatable.js';
import BooleanString from '../assert/string/boolean.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';

/**
 * {@see Validator} for boolean type
 */
export function BooleanParameters() : Validator<any, boolean, Readonly<Validatable<any, string>>>;

export function BooleanParameters<MessageType>(
    message : ValidatableParameters<any, MessageType>
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;

export function BooleanParameters<MessageType>(
    message : ValidatableParameters<any, MessageType|string> = BooleanString.Parameters
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>> {

    return function (value) {

        return  NumberValidatable.Parameters(value, message);

    } as Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;

}


/**
 * {@see Validator} for boolean type
 */
export function BooleanParameter() : Validator<any, boolean, Readonly<Validatable<any, string>>>;

export function BooleanParameter<MessageType>(
    message : ValidatableParameter<any, MessageType>
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;

export function BooleanParameter<MessageType>(
    message : ValidatableParameter<any, MessageType|string> = BooleanString.Parameter
) : Validator<any, boolean, Readonly<Validatable<any, MessageType|string>>> {

    return BooleanParameters((value, valid) => message({value, valid}));

}


namespace Boolean {
    export const Parameters = BooleanParameters;
    export const Parameter = BooleanParameter;
}
export default Boolean;
