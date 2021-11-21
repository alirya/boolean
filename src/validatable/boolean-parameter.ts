import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/dynamic";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
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
) : Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, string>>>;

export default function BooleanParameter<Argument, MessageType>({
       value,// : Argument,
       message,// : (result:Validatable & Value)=>MessageType
   } : Value<Argument> & Message<Dynamic<Argument, MessageType>>,
) : Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;

export default function BooleanParameter<Argument, MessageType>({
        value,// : Argument,
        message = NumberMessage,// : (result:Validatable & Value)=>MessageType
    } : Value<Argument> & Message<Dynamic<Argument, MessageType|string>>,
) : Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageType|string>>> {

    return BooleanParameters(value, (value, valid) => message({value, valid}));
}
