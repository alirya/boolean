import ValidatableEqual from '../validatable/equal.js';
import Validatable from '@alirya/validator/validatable/validatable.js';
import Simple from '@alirya/validator/simple.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import EqualMessage from '../assert/string/equal.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import EqualMessageParameter from '../assert/string/equal.js';
import DynamicValidatable from '@alirya/validator/value/validatable.js';

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

export function EqualParameters<
    Base = unknown,
    Type = unknown,
    MessageType = unknown,
>(
    compare : Type,
    message : ValidatableParameters<Base, MessageType, [Type]>,
) : Simple<Base, Type, MessageType>;

export function EqualParameters<
    Base = unknown,
    Type = unknown,
>(
    compare : Type,
) : Simple<Base, Type, Validatable<Base, string>>;

export function EqualParameters<
    Base = unknown,
    Type = unknown,
    MessageType = unknown,
>(
    compare : Type,
    message : ValidatableParameters<Base, MessageType|string, [Type]> = EqualMessage.Parameters,
) : Simple<Base, Type, MessageType|string> {

    return function (value)  {

        return ValidatableEqual.Parameters(value, compare, message);

    } as Simple<Base, Type, MessageType|string>;
}




/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

export interface EqualArgument<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
    > extends Value<Allow>, Message<ValidatableParameter<Allow, MessageType|string, DynamicValidatable<Allow> & {compare : Expected}>> {
    compare : Expected;
}

export function EqualParameter<
    Allow = unknown,
    Expected = unknown,
>({value} : EqualArgument<Allow, Expected, string>) : Simple<Allow, Expected, string>;

export function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message
    } : EqualArgument<Allow, Expected, MessageType>
) : Simple<Allow, Expected, MessageType>;

export function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message = EqualMessageParameter.Parameter
    } : EqualArgument<Allow, Allow|Expected, MessageType|string>
) : Simple<Allow, Expected, MessageType|string> {

    const compare = value;

    return EqualParameters(
        value,
        (value, valid) => message({value, compare, valid})
    ) as Simple<Allow, Expected, MessageType|string>;
}




namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
