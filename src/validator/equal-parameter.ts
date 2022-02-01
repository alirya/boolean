import Value from '@alirya/value/value';
import Simple from '@alirya/validator/simple';
import Message from '@alirya/message/message';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import EqualMessage from '../assert/string/equal-parameter';
import MessageDynamic from '@alirya/validator/message/function/validatable-parameter';
import Dynamic from '@alirya/validator/value/validatable';
import EqualParameters from './equal-parameters';

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

export interface EqualParameterArgument<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
    > extends Value<Allow>, Message<MessageDynamic<Allow, MessageType|string, Dynamic<Allow> & {compare : Expected}>> {
    compare : Expected;
}

export default function EqualParameter<
    Allow = unknown,
    Expected = unknown,
>({value} : EqualParameterArgument<Allow, Expected, string>) : Simple<Allow, Expected, ValidatorValidatable<Allow, string>>;

export default function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message
    } : EqualParameterArgument<Allow, Expected, MessageType>
) : Simple<Allow, Expected, ValidatorValidatable<Allow, MessageType>>;

export default function EqualParameter<
    Allow = unknown,
    Expected = unknown,
    MessageType = unknown,
>({
        value,
        message = EqualMessage
    } : EqualParameterArgument<Allow, Allow|Expected, MessageType|string>
) : Simple<Allow, Expected, ValidatorValidatable<Allow, MessageType|string>> {

    const compare = value;

    return EqualParameters(
        value,
        (value, valid) => message({value, compare, valid})
    );
}


