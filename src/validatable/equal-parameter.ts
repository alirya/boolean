import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import EqualParameters from "./equal-parameters";
import MessageDynamic from "@dikac/t-validator/message/function/validatable-parameter";
import EqualMessage from "../assert/string/equal-parameter";
import Dynamic from "@dikac/t-validator/value/validatable";

export interface EqualParameterArgument <
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
    > extends Value<ValueType>, Message<MessageDynamic<ValueType|TypeType, MessageType|string, Dynamic<ValueType|TypeType> & {compare : TypeType}>> {
    compare : TypeType
}

export default function EqualParameter<
    ValueType = unknown,
    TypeType = unknown,
>(
    {
        value,
        compare,
    } : EqualParameterArgument<ValueType, TypeType, string>
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>

export default function EqualParameter<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message,
    } : EqualParameterArgument<ValueType, TypeType, MessageType>
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>

export default function EqualParameter<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message = EqualMessage,
    } : EqualParameterArgument<ValueType, TypeType, MessageType>
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType|string>>> {

    return EqualParameters(value, compare,
        (value, valid, compare) => message({value, valid, compare})
    )
}
