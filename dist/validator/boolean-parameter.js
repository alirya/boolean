import BooleanString from "../assert/string/boolean-parameter";
import BooleanParameters from "./boolean-parameters";
export default function BooleanParameter(message = BooleanString) {
    return BooleanParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=boolean-parameter.js.map