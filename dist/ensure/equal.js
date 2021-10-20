import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/equal";
export default function Equal({ value, compare, error = ThrowableType, }) {
    AssertType(value, { compare, error });
    return value;
}
//# sourceMappingURL=equal.js.map