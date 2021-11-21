import EqualParameters from "./equal-parameters";
import EqualMessage from "../assert/string/equal-parameter";
export default function EqualParameter({ value, compare, message = EqualMessage, }) {
    return EqualParameters(value, compare, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=equal-parameter.js.map