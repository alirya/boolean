import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validator/validatable/dynamic";
import BooleanString from "../assert/string/boolean-parameter";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import BooleanParameters from "./boolean-parameters";

/**
 * {@see Validator} for boolean type
 */
export default function BooleanParameter() : Validator<any, boolean, Readonly<Validatable<any, string>>>;

export default function BooleanParameter<MessageType>(
    message : Dynamic<any, MessageType>
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;

export default function BooleanParameter<MessageType>(
    message : Dynamic<any, MessageType|string> = BooleanString
) : Validator<any, boolean, Readonly<Validatable<any, MessageType|string>>> {

    return BooleanParameters((value, valid) => message({value, valid}))

}
