import Value from "@dikac/t-value/value";
import ValidatableEqual from "../validatable/equal";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Simple from "@dikac/t-validator/simple";

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */

export default function Equal<
    Base = any,
    Type extends Base = Base,
    MessageType = unknown,
>(
    compare : Type,
    message : <Argument extends Base>(argument: Value<[Base, Type]> & ValidatableInterface) => MessageType
) {

    return function <Argument extends Base> (value)  {

        return ValidatableEqual(value, compare, message);

    } as Simple<Base, Type, Validatable<Base, MessageType>>
}


