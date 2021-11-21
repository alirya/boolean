import EqualParameter, {EqualArgument} from "./equal-parameter";
import EqualParameters from "./equal-parameters";

namespace Equal {

    export const Parameter = EqualParameter;
    export const Parameters = EqualParameters;
    export type Argument<Compare> = EqualArgument<Compare>;
}

export default Equal;

