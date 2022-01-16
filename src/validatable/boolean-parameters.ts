import Callback from "@alirya/validator/validatable/callback-function-parameters";
import Guard from "../boolean";
import Return from "@alirya/validator/validatable/simple";
import ValidatorValidatable from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";
import BooleanMessage from "../assert/string/boolean-parameters";
/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export default function BooleanParameters<Argument, MessageType>(
    value : Argument,
    message : Dynamic<Argument, MessageType>
) : Return<Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;

export default function BooleanParameters<Argument, MessageType>(
    value : Argument,
) : Return<Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;

export default function BooleanParameters<Argument, MessageType>(
    value : Argument,
    message : Dynamic<Argument, MessageType|string> = BooleanMessage
) : Return<Argument, boolean, Readonly<ValidatorValidatable<any, MessageType|string>>> {

    return <Return<Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>> Callback(value, Guard, message);
}
