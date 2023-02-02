import Validator from '@alirya/validator/simple';
import NumberValidatable from '../validatable/boolean';
import Validatable from '@alirya/validator/validatable/validatable';
import BooleanString from '../assert/string/boolean';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';

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
