import BooleanParameters from "./boolean-parameters";
import NumberMessage from "../assert/string/boolean-parameter";
export default function BooleanParameter({ value, message = NumberMessage, }) {
    return BooleanParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=boolean-parameter.js.map