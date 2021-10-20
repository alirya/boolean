import ThrowableType from "./throwable/boolean";
import Callback from "@dikac/t-function/assert/callback";
import EqualValidation from "../equal";
export default function Equal(value, { compare, error = ThrowableType }) {
    Callback(value, { validation: EqualValidation, error, argument: [compare] });
}
//# sourceMappingURL=equal.js.map