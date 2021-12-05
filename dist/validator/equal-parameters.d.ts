import Validatable from "@dikac/t-validator/validatable/validatable";
import Simple from "@dikac/t-validator/simple";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default function EqualParameters<Base = unknown, Type = unknown, MessageType = unknown>(compare: Type, message: Dynamic<Base, MessageType, [Type]>): Simple<Base, Type, Validatable<Base, MessageType>>;
export default function EqualParameters<Base = unknown, Type = unknown>(compare: Type): Simple<Base, Type, Validatable<Base, string>>;
