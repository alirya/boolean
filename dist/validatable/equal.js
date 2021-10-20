import BooleanEqual from "@dikac/t-boolean/equal";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-merge";
import Callback from "@dikac/t-validator/validatable/callback";
export default function Equal({ value, compare, message, }) {
    const callback = Callback({
        value: [compare, value],
        validation: (values) => BooleanEqual(...values),
        message
    });
    return new ReadonlyMerge({ value: value }, callback, callback);
}
//# sourceMappingURL=equal.js.map