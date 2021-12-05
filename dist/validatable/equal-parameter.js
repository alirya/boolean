import EqualParameters from "./equal-parameters";
import EqualMessage from "../assert/string/equal-parameter";
export default function EqualParameter({ value, compare, message = EqualMessage, }) {
    return EqualParameters(value, compare, (value, valid, compare) => message({ value, valid, compare }));
}
//# sourceMappingURL=equal-parameter.js.map