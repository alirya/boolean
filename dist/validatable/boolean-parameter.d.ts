import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/dynamic";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
/**
 * validate if {@param value} is boolean
 *
 * @param value
 * value to be validated
 *
 * @param message
 * for generating message
 */
export default function BooleanParameter<Argument, MessageType>({ value, }: Value<Argument>): Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, string>>>;
export default function BooleanParameter<Argument, MessageType>({ value, message, }: Value<Argument> & Message<Dynamic<Argument, MessageType>>): Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageType>>>;
