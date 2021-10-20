import ThrowableType from "./throwable/boolean";
import Callback from "@dikac/t-function/assert/callback";
import BooleanType from "../boolean";
/**
 * Throw exception if given value is no boolean type
 */
export default function Boolean(value, error = ThrowableType) {
    Callback(value, { validation: BooleanType, error });
}
//# sourceMappingURL=boolean.js.map