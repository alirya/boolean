import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/boolean";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";

/**
 * {@see Validator} for boolean type
 */


export default function Boolean<MessageType>(
    message : (result:Readonly<Value & Validatable>)=>MessageType
) : Validator<any, boolean, Readonly<Validatable<any, MessageType>>> {

    return function (value) {

        return  NumberValidatable(value, message);

    } as Validator<any, boolean, Readonly<Validatable<any, MessageType>>>

}
