import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import BooleanParameters from "./boolean-parameters";
import NumberMessage from "../assert/string/boolean-parameter";

/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export default function BooleanParameter<Argument, MessageType>({
       value,
   } : Value<Argument>,
) : Return<Argument, boolean, Readonly<ValidatorValidatable<unknown, string>>>;

export default function BooleanParameter<Argument, MessageType>({
       value,
       message,
   } : Value<Argument> & Message<Dynamic<Argument, MessageType>>,
) : Return<Argument, boolean, Readonly<ValidatorValidatable<unknown, MessageType>>>;

export default function BooleanParameter<Argument, MessageType>({
        value,
        message = NumberMessage,
    } : Value<Argument> & Message<Dynamic<Argument, MessageType|string>>,
) : Return<Argument, boolean, Readonly<ValidatorValidatable<unknown, MessageType|string>>> {

    return BooleanParameters(value, (value, valid) => message({value, valid}));
}
