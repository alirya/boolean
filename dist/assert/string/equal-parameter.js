import SafeCast from "@dikac/t-string/safe-cast";
import EqualParameters from "./equal-parameters";
export default function EqualParameter({ value: [value, compare], valid, conversion = SafeCast }) {
    return EqualParameters(value, valid, compare, conversion);
}
//# sourceMappingURL=equal-parameter.js.map