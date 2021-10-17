import Validator from "@dikac/t-validator/simple";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
/**
 * {@see Validator} for boolean type
 */
export default function Boolean<MessageType>(message: (result: Readonly<Value & Validatable>) => MessageType): Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;
