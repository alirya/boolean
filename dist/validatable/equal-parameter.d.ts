import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
export default function EqualParameter<BaseType = unknown, ValueType extends BaseType = BaseType, TypeType extends BaseType = BaseType>({ value, compare, }: Value<ValueType> & {
    compare: TypeType;
}): Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;
export default function EqualParameter<BaseType = unknown, ValueType extends BaseType = BaseType, TypeType extends BaseType = BaseType, MessageType = unknown>({ value, compare, message, }: Value<ValueType> & {
    compare: TypeType;
} & Message<Dynamic<[ValueType, TypeType], MessageType>>): Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
