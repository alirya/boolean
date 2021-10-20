import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import BooleanEqual from "@dikac/t-boolean/equal";
import Validatable from "@dikac/t-validatable/validatable";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-merge";
import Callback from "@dikac/t-validator/validatable/callback";
import Simple from "@dikac/t-validator/validatable/simple";


export default function Equal<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    TypeType extends BaseType = BaseType,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message,
    } : Value<ValueType> & {compare : TypeType} & Message<(result:Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>)=>MessageType>
) : Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>> {

    const callback = Callback({
        value:[compare, value],
        validation: (values: [BaseType, BaseType]) => BooleanEqual(...values),
        message
});

    return new ReadonlyMerge({value:value}, callback, callback) as
        Simple<BaseType, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
}
