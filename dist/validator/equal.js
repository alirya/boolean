import ValidatableEqual from "../validatable/equal";
import EqualMessage from "../assert/string/equal";
export default function Equal({ value, message = EqualMessage }) {
    const compare = value;
    return function (value) {
        return ValidatableEqual({ value, compare, message });
    };
}
//# sourceMappingURL=equal.js.map