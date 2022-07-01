import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import BooleanEqual from '../equal';
import Validatable from '@alirya/validatable/validatable';
import {ReadonlyWrapperParameters} from '@alirya/validator/validatable/readonly-wrapper';
import {CallbackClassParameters} from '@alirya/validator/validatable/callback';
import Simple from '@alirya/validator/validatable/simple';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import EqualMessage from '../assert/string/equal';
import DynamicValidatable from '@alirya/validator/value/validatable';

export function EqualParameters<
    ValueType  = unknown,
    TypeType  = unknown,
>(
    value : ValueType,
    compare : TypeType,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;

export function EqualParameters<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    message : ValidatableParameters<ValueType|TypeType, MessageType, [TypeType]>,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;

export function EqualParameters<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    value : ValueType,
    compare : TypeType,
    message : ValidatableParameters<ValueType|TypeType, MessageType|string, [TypeType]> = EqualMessage.Parameters,
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>> {

    const bs = new CallbackClassParameters<ValueType|TypeType>(value, BooleanEqual.Parameters, message, [compare]);

    return new ReadonlyWrapperParameters({value:value}, bs, bs) as Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
}


export interface EqualArgument <
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
    > extends Value<ValueType>, Message<ValidatableParameter<ValueType|TypeType, MessageType|string, DynamicValidatable<ValueType|TypeType> & {compare : TypeType}>> {
    compare : TypeType;
}

export function EqualParameter<
    ValueType = unknown,
    TypeType = unknown,
>(
    {
        value,
        compare,
    } : EqualArgument<ValueType, TypeType, string>
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<string>>>;

export function EqualParameter<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message,
    } : EqualArgument<ValueType, TypeType, MessageType>
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;

export function EqualParameter<
    ValueType = unknown,
    TypeType = unknown,
    MessageType = unknown,
>(
    {
        value,
        compare,
        message = EqualMessage.Parameter,
    } : EqualArgument<ValueType, TypeType, MessageType>
) : Simple<ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType|string>>> {

    return EqualParameters(value, compare,
        (value, valid, compare) => message({value, valid, compare})
    );
}


namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
