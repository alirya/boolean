import ValidatableEqual from '../validatable/equal';
import Validatable from '@alirya/validator/validatable/validatable';
import Simple from '@alirya/validator/simple';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import EqualMessage from '../assert/string/equal';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import EqualMessageParameter from '../assert/string/equal';
import DynamicValidatable from '@alirya/validator/value/validatable';

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
) : Simple<Base, Type, Validatable<Base, MessageType>>;

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
) : Simple<Base, Type, Validatable<Base, MessageType|string>> {

    return function (value)  {

        return ValidatableEqual.Parameters(value, compare, message);

    } as Simple<Base, Type, Validatable<Base, MessageType>>;
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
>({value} : EqualArgument<Allow, Expected, string>) : Simple<Allow, Expected, ValidatorValidatable<Allow, string>>;

export function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message
    } : EqualArgument<Allow, Expected, MessageType>
) : Simple<Allow, Expected, ValidatorValidatable<Allow, MessageType>>;

export function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message = EqualMessageParameter.Parameter
    } : EqualArgument<Allow, Allow|Expected, MessageType|string>
) : Simple<Allow, Expected, ValidatorValidatable<Allow, MessageType|string>> {

    const compare = value;

    return EqualParameters(
        value,
        (value, valid) => message({value, compare, valid})
    );
}




namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
