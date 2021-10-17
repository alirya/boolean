import BooleanEqual from "@dikac/t-boolean/equal";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-merge";
import Callback from "@dikac/t-validator/validatable/callback";
export default function Equal(value, compare, message) {
    const bs = new Callback([compare, value], (values) => BooleanEqual(...values), message);
    return new ReadonlyMerge({ value: value }, bs, bs);
}
//# sourceMappingURL=equal.js.map