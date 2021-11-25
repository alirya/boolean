import ValidatableEqual from "../validatable/equal-parameters";
import EqualMessage from "../assert/string/equal-parameters";
export default function EqualParameters(compare, message = EqualMessage) {
    return function (value) {
        return ValidatableEqual(value, compare, message);
    };
}
//# sourceMappingURL=equal-parameters.js.map