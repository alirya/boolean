import EqualParameter, { EqualArgument } from "./equal-parameter";
import EqualParameters from "./equal-parameters";
declare namespace Equal {
    const Parameter: typeof EqualParameter;
    const Parameters: typeof EqualParameters;
    type Argument<Compare> = EqualArgument<Compare>;
}
export default Equal;
