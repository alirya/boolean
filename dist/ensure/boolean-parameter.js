import ThrowableType from "../assert/throwable/boolean-parameter";
import BooleanParameters from "./boolean-parameters";
// export default function Boolean(
//     value : unknown,
//     error : (value:unknown)=>Error = ThrowableType
// ) : boolean {
//
//     AssertType(value, error)
//
//     return value;
// }
export default function BooleanParameter({ value, error = ThrowableType }) {
    return BooleanParameters(value, error);
}
//# sourceMappingURL=boolean-parameter.js.map