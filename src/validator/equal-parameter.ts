import Value from "@dikac/t-value/value";
import ValidatableEqual from "../validatable/equal-parameter";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Simple from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import EqualMessage from "../assert/string/equal-parameter";
import MessageDynamic from "@dikac/t-validator/message/function/validatable-parameter";
import Dynamic from "@dikac/t-validator/value/validatable";

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

export interface EqualParameterArgument <
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
    > extends Value<Allow>, Message<MessageDynamic<Allow, MessageType|string, Dynamic<Allow> & {compare : Expected}>> {
    compare : Expected
}

export default function EqualParameter<
    Allow = unknown,
    Expected = unknown,
>({value} : EqualParameterArgument<Allow, Expected, string>) : Simple<Allow, Expected, ValidatorValidatable<Allow, string>>

export default function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message
    } : EqualParameterArgument<Allow, Expected, MessageType>
) : Simple<Allow, Expected, ValidatorValidatable<Allow, MessageType>>

export default function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message = EqualMessage
    } : EqualParameterArgument<Allow, Allow|Expected, MessageType|string>
) : Simple<Allow, Expected, ValidatorValidatable<Allow, MessageType|string>> {

    const compare = value;

    return function (value)  {

        return ValidatableEqual({value, compare, message});

    } as Simple<Allow, Expected, Validatable<Allow, MessageType|string>>
}


