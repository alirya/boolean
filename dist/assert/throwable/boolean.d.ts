import BooleanParameter from "./boolean-parameter";
import BooleanParameters from "./boolean-parameters";
declare namespace Boolean {
    const Parameter: typeof BooleanParameter;
    const Parameters: typeof BooleanParameters;
}
export default Boolean;
