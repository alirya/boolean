import ValidatableEqual from "../validatable/equal-parameter";
import EqualMessage from "../assert/string/equal-parameter";
export default function EqualParameter({ value, message = EqualMessage }) {
    const compare = value;
    return function (value) {
        return ValidatableEqual({ value, compare, message });
    };
}
//# sourceMappingURL=equal-parameter.js.map