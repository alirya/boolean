import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
export default function Equal<BaseType = unknown, ValueType extends BaseType = BaseType, TypeType extends BaseType = BaseType, MessageType = unknown>({ value, compare, message, }: Value<ValueType> & {
    compare: TypeType;
} & Message<(result: Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>) => MessageType>): Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
