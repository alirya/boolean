import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export default function EqualParameters<BaseType = unknown, ValueType extends BaseType = BaseType, TypeType extends BaseType = BaseType>(value: ValueType, compare: TypeType): Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;
export default function EqualParameters<BaseType = unknown, ValueType extends BaseType = BaseType, TypeType extends BaseType = BaseType, MessageType = unknown>(value: ValueType, compare: TypeType, message: Dynamic<[ValueType, TypeType], MessageType>): Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
