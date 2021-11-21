import NumberValidatable from "../validatable/boolean-parameters";
import BooleanString from "../assert/string/boolean-parameters";
export default function BooleanParameters(message = BooleanString) {
    return function (value) {
        return NumberValidatable(value, message);
    };
}
//# sourceMappingURL=boolean-parameters.js.map