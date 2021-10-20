import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export default function Boolean<MessageType, Argument>({ value, }: Value<Argument>): Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, string>>>;
export default function Boolean<MessageType, Argument>({ value, // : Argument,
message, }: Value<Argument> & Message<(result: Validatable & Value) => MessageType>): Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;
