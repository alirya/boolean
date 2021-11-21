import BooleanEqual from "@dikac/t-boolean/equal";
import ReadonlyMerge from "@dikac/t-validator/validatable/readonly-wrapper-parameters";
import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import EqualMessage from "../assert/string/equal-parameters";
export default function EqualParameters(value, compare, 
// message : (result:Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>)=>MessageType,
message = EqualMessage) {
    const bs = new Callback([compare, value], (values) => BooleanEqual(...values), message);
    return new ReadonlyMerge({ value: value }, bs, bs);
}
//# sourceMappingURL=equal-parameters.js.map