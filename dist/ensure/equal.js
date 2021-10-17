import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/equal";
/**
 * Throw exception if given value is no boolean type
 */
export default function Equal(value, compare, error = ThrowableType) {
    AssertType(value, compare, error);
    return value;
}
//# sourceMappingURL=equal.js.map