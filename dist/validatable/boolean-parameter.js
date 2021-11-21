import BooleanParameters from "./boolean-parameters";
import NumberMessage from "../assert/string/boolean-parameter";
export default function BooleanParameter({ value, // : Argument,
message = NumberMessage, // : (result:Validatable & Value)=>MessageType
 }) {
    return BooleanParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=boolean-parameter.js.map