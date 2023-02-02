import {CallbackParameters} from '@alirya/validator/validatable/callback';
import Guard from '../boolean';
import Return from '@alirya/validator/validatable/simple';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import BooleanMessage from '../assert/string/boolean';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export function BooleanParameters<Argument, MessageType>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageType>
) : Return<Argument, boolean, MessageType>;

export function BooleanParameters<Argument, MessageType>(
    value : Argument,
) : Return<Argument, boolean, MessageType>;

export function BooleanParameters<Argument, MessageType>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageType|string> = BooleanMessage.Parameters
) : Return<Argument, boolean, MessageType|string> {

    return CallbackParameters(value, Guard, message);
}


/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export function BooleanParameter<Argument, MessageType>({
       value,
   } : Value<Argument>,
) : Return<Argument, boolean, string>;

export function BooleanParameter<Argument, MessageType>({
       value,
       message,
   } : Value<Argument> & Message<ValidatableParameter<Argument, MessageType>>,
) : Return<Argument, boolean, MessageType>;

export function BooleanParameter<Argument, MessageType>({
        value,
        message = BooleanMessage.Parameter,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageType|string>>,
) : Return<Argument, boolean, MessageType|string> {

    return BooleanParameters(value, (value, valid) => message({value, valid}));
}


namespace Boolean {
    export const Parameters = BooleanParameters;
    export const Parameter = BooleanParameter;
}
export default Boolean;
