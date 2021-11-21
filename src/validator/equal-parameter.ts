import Value from "@dikac/t-value/value";
import ValidatableEqual from "../validatable/equal-parameter";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validator/validatable/dynamic";
import Simple from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import ValidatorValidatable from "@dikac/t-validator/validatable/dynamic";
import EqualMessage from "../assert/string/equal-parameter";

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

export default function EqualParameter<
    Base = any,
    Type extends Base = Base,
>({value} : Value<Type>) : Simple<Base, Type, ValidatorValidatable<Base, string>>

export default function EqualParameter<
    Base = any,
    Type extends Base = Base,
    MessageType = unknown,
>({
        value,
        message
    } : Message<<Argument extends Base>(argument: Value<[Base, Type]> & ValidatableInterface) => MessageType> & Value<Type>
) : Simple<Base, Type, ValidatorValidatable<Base, MessageType>>

export default function EqualParameter<
    Base = any,
    Type extends Base = Base,
    MessageType = unknown,
>({
        value,
        message = EqualMessage
    } : Message<<Argument extends Base>(argument: Value<[Base, Type]> & ValidatableInterface) => MessageType|string> & Value<Type>
) : Simple<Base, Type, ValidatorValidatable<Base, MessageType>> {

    const compare = value;

    return function (value)  {

        return ValidatableEqual({value, compare, message});

    } as Simple<Base, Type, Validatable<Base, MessageType>>
}


