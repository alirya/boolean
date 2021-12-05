import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export default function BooleanParameters<Argument, MessageType>(value: Argument, message: Dynamic<Argument, MessageType>): Return<Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;
export default function BooleanParameters<Argument, MessageType>(value: Argument): Return<Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;
