import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/boolean";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";
import BooleanString from "../validatable/string/boolean";

/**
 * {@see Validator} for boolean type
 */
export default function Boolean() : Validator<any, boolean, Readonly<Validatable<any, string>>>;

export default function Boolean<MessageType>(
    message : (result:Readonly<Value & Validatable>)=>MessageType
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;

export default function Boolean<MessageType>(
    message : (result:Readonly<Value & Validatable>)=>MessageType|string = BooleanString
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>> {

    return function (value) {

        return  NumberValidatable({value, message});

    } as Validator<any, boolean, Readonly<Validatable<any, MessageType>>>

}
