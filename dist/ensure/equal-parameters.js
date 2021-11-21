import ThrowableType from "../assert/throwable/boolean-parameter";
import AssertType from "../assert/equal-parameters";
/**
 * Throw exception if given value is no boolean type
 */
export default function EqualParameters(value, compare, error = ThrowableType) {
    AssertType(value, compare, error);
    return value;
}
//# sourceMappingURL=equal-parameters.js.map