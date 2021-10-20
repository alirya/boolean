import ThrowableType from "../assert/throwable/boolean";
import AssertType from "../assert/boolean";
// export default function Boolean(
//     value : unknown,
//     error : (value:unknown)=>Error = ThrowableType
// ) : boolean {
//
//     AssertType(value, error)
//
//     return value;
// }
export default function Boolean({ value, error = ThrowableType }) {
    AssertType(value, error);
    return value;
}
//# sourceMappingURL=boolean.js.map