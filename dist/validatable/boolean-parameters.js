import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import Guard from "../boolean";
import BooleanMessage from "../assert/string/boolean-parameters";
export default function BooleanParameters(value, message = BooleanMessage) {
    return Callback(value, Guard, message);
}
//# sourceMappingURL=boolean-parameters.js.map