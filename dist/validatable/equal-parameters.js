import BooleanEqual from "../equal";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import EqualMessage from "../assert/string/equal-parameters";
export default function EqualParameters(value, compare, message = EqualMessage) {
    const bs = new Callback(value, BooleanEqual, message, [compare]);
    return new ReadonlyMerge({ value: value }, bs, bs);
}
//# sourceMappingURL=equal-parameters.js.map