import Validatable from "@dikac/t-validator/validatable/dynamic";
import Simple from "@dikac/t-validator/simple";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default function EqualParameters<Base = any, Type extends Base = Base, MessageType = unknown>(compare: Type, message: Dynamic<[Base, Type], MessageType>): Simple<Base, Type, Validatable<Base, MessageType>>;
export default function EqualParameters<Base = any, Type extends Base = Base>(compare: Type): Simple<Base, Type, Validatable<Base, string>>;
