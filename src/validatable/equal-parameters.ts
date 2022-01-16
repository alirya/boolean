import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import BooleanEqual from '../equal-parameters';
import Validatable from '@alirya/validatable/validatable';
import ReadonlyMerge from '@alirya/validator/validatable/readonly-wrapper-parameters';
import Callback from '@alirya/validator/validatable/callback-class-parameters';
import Simple from '@alirya/validator/validatable/simple';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import EqualMessage from '../assert/string/equal-parameters';

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
    message : Dynamic<ValueType|TypeType, MessageType, [TypeType]>,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;

export default function EqualParameters<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    message : Dynamic<ValueType|TypeType, MessageType|string, [TypeType]> = EqualMessage,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>> {

    const bs = new Callback<ValueType|TypeType>(value, BooleanEqual, message, [compare]);

    return new ReadonlyMerge({value:value}, bs, bs) as Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
}
