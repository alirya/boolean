import NumberValidatable from "../validatable/boolean";
import BooleanString from "../validatable/string/boolean";
export default function Boolean(message = BooleanString) {
    return function (value) {
        return NumberValidatable({ value, message });
    };
}
//# sourceMappingURL=boolean.js.map