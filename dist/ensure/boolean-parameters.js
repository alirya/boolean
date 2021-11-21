import ThrowableType from "../assert/throwable/boolean-parameter";
import AssertType from "../assert/boolean";
/**
 * Throw exception if given value is no boolean type
 */
export default function BooleanParameters(value, error = ThrowableType) {
    AssertType(value, error);
    return value;
}
//# sourceMappingURL=boolean-parameters.js.map