import ThrowableType from "./throwable/boolean";
import Callback from "@dikac/t-function/assert/callback";
import EqualValidation from "../equal";
/**
 * Throw exception if given value is not equal
 */
export default function Equal(value, compare, error = ThrowableType) {
    Callback(value, EqualValidation, error, compare);
}
//# sourceMappingURL=equal.js.map