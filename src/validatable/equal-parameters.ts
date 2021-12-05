import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import BooleanEqual from "../equal";
import Validatable from "@dikac/t-validatable/validatable";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import Simple from "@dikac/t-validator/validatable/simple";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
import EqualMessage from "../assert/string/equal-parameters";

export default function EqualParameters<
    ValueType  = unknown,
    TypeType  = unknown,
>(
    value : ValueType,
    compare : TypeType,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;

export default function EqualParameters<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    message : Dynamic<ValueType, MessageType, [TypeType]>,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;

export default function EqualParameters<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    message : Dynamic<ValueType, MessageType|string, [TypeType]> = EqualMessage,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>> {

    const bs = new Callback(value, BooleanEqual, message, [compare]);

    return new ReadonlyMerge({value:value}, bs, bs) as Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
}
