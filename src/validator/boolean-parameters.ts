import Validator from "@dikac/t-validator/simple";
import NumberValidatable from "../validatable/boolean-parameters";
import Validatable from "@dikac/t-validator/validatable/dynamic";
import BooleanString from "../assert/string/boolean-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";

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
