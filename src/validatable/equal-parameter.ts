import Value from "@alirya/value/value";
import Message from "@alirya/message/message";
import Validatable from "@alirya/validatable/validatable";
import Simple from "@alirya/validator/validatable/simple";
import EqualParameters from "./equal-parameters";
import MessageDynamic from "@alirya/validator/message/function/validatable-parameter";
import EqualMessage from "../assert/string/equal-parameter";
import Dynamic from "@alirya/validator/value/validatable";

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
