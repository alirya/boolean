import ThrowableType from "./throwable/boolean-parameter";
import Callback from "@dikac/t-function/assert/callback-parameters";
import EqualValidation from "../equal";
/**
 * Throw exception if given value is not equal
 */
export default function EqualParameters(value, compare, error = ThrowableType) {
    Callback(value, EqualValidation, error, compare);
}
//# sourceMappingURL=equal-parameters.js.map