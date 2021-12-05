import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import MessageDynamic from "@dikac/t-validator/message/function/validatable-parameter";
import Dynamic from "@dikac/t-validator/value/validatable";
export interface EqualParameterArgument<ValueType = unknown, TypeType = unknown, MessageType = unknown> extends Value<ValueType>, Message<MessageDynamic<ValueType, MessageType | string, Dynamic<ValueType> & {
    compare: TypeType;
}>> {
    compare: TypeType;
}
export default function EqualParameter<ValueType = unknown, TypeType = unknown>({ value, compare, }: EqualParameterArgument<ValueType, TypeType, string>): Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;
export default function EqualParameter<ValueType = unknown, TypeType = unknown, MessageType = unknown>({ value, compare, message, }: EqualParameterArgument<ValueType, TypeType, MessageType>): Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
