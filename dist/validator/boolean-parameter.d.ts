import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
/**
 * {@see Validator} for boolean type
 */
export default function BooleanParameter(): Validator<any, boolean, Readonly<Validatable<any, string>>>;
export default function BooleanParameter<MessageType>(message: Dynamic<any, MessageType>): Validator<any, boolean, Readonly<Validatable<any, MessageType>>>;
