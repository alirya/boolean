import BooleanParameter from "./boolean-parameter";
import BooleanParameters from "./boolean-parameters";
import { BooleanArgument } from "./boolean-parameter";
declare namespace Boolean {
    const Parameter: typeof BooleanParameter;
    const Parameters: typeof BooleanParameters;
    type Argument = BooleanArgument;
}
export default Boolean;
