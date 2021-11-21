import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import EqualParameters from "./equal-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import EqualMessage from "../assert/string/equal-parameter";


export default function EqualParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
>(
    {
        value,
        compare,
    } : Value<ValueType> & {compare : TypeType}
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>

export default function EqualParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message,
    } : Value<ValueType> & {compare : TypeType} & Message<Dynamic<[ValueType, TypeType], MessageType>>
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>

export default function EqualParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message = EqualMessage,
    } : Value<ValueType> & {compare : TypeType} & Message<Dynamic<[ValueType, TypeType], MessageType|string>>
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType|string>>> {

    return EqualParameters(value, compare, (value, valid) => message({value, valid}))
}
