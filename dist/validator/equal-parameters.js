import ValidatableEqual from "../validatable/equal-parameters";
import EqualMessage from "../assert/string/equal-parameters";
export default function EqualParameters(compare, 
//message : <Argument extends Base>(argument: Value<[Base, Type]> & ValidatableInterface) => MessageType
message = EqualMessage) {
    return function (value) {
        return ValidatableEqual(value, compare, message);
    };
}
//# sourceMappingURL=equal-parameters.js.map