import Callback from "@dikac/t-validator/validatable/callback";
import Guard from "../boolean";
export default function Boolean({ value, // : Argument,
message, // : (result:Validatable & Value)=>MessageType
 }) {
    return Callback({
        value,
        validation: Guard,
        message
    });
}
//# sourceMappingURL=boolean.js.map