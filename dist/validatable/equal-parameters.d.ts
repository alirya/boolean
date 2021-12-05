import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
export default function EqualParameters<ValueType = unknown, TypeType = unknown>(value: ValueType, compare: TypeType): Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;
export default function EqualParameters<ValueType = unknown, TypeType = unknown, MessageType = unknown>(value: ValueType, compare: TypeType, message: Dynamic<ValueType, MessageType, [TypeType]>): Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
