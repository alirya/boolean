import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import BooleanEqual from "@dikac/t-boolean/equal";
import Validatable from "@dikac/t-validatable/validatable";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import Simple from "@dikac/t-validator/validatable/simple";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import EqualMessage from "../assert/string/equal-parameters";

export default function EqualParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
>(
    value : ValueType,
    compare : TypeType,
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;

export default function EqualParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    // message : (result:Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>)=>MessageType,
    message : Dynamic<[ValueType, TypeType], MessageType>,
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;

export default function EqualParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    // message : (result:Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>)=>MessageType,
    message : Dynamic<[ValueType, TypeType], MessageType|string> = EqualMessage,
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>> {

    const bs = new Callback([compare, value], (values: [BaseType, BaseType])=>BooleanEqual(...values), message);

    return new ReadonlyMerge({value:value}, bs, bs) as Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
}
