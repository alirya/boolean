import Validator from "@alirya/validator/simple";
import NumberValidatable from "../validatable/boolean-parameters";
import Validatable from "@alirya/validator/validatable/validatable";
import BooleanString from "../assert/string/boolean-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

/**
 * {@see Validator} for boolean type
 */
export default function BooleanParameters() : Validator<any, boolean, Readonly<Validatable<any, string>>>;

export default function BooleanParameters<MessageType>(
    message : Dynamic<any, MessageType>
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;

export default function BooleanParameters<MessageType>(
    message : Dynamic<any, MessageType|string> = BooleanString
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>> {

    return function (value) {

        return  NumberValidatable(value, message);

    } as Validator<any, boolean, Readonly<Validatable<any, MessageType>>>

}
