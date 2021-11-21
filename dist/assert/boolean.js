import ThrowableType from "./throwable/boolean-parameter";
import Callback from "@dikac/t-function/assert/callback-parameters";
import BooleanType from "../boolean";
/**
 * Throw exception if given value is no boolean type
 */
export default function Boolean(value, error = ThrowableType) {
    Callback(value, BooleanType, error);
}
//# sourceMappingURL=boolean.js.map