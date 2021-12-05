import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
/**
 * {@see Validator} for boolean type
 */
export default function BooleanParameters(): Validator<any, boolean, Readonly<Validatable<any, string>>>;
export default function BooleanParameters<MessageType>(message: Dynamic<any, MessageType>): Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;
