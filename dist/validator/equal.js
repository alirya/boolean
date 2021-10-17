import ValidatableEqual from "../validatable/equal";
/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default function Equal(compare, message) {
    return function (value) {
        return ValidatableEqual(value, compare, message);
    };
}
//# sourceMappingURL=equal.js.map