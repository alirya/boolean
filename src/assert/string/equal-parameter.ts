import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import SafeCast from "@dikac/t-string/safe-cast";
import EqualParameters from "./equal-parameters";

export default function EqualParameter<Allow, Expected>(
    {
        value, //: [value, compare],
        valid,
        compare,
        conversion = SafeCast
    } : Validatable & Value<Allow> & {
        conversion ?: (value:Expected|Allow)=>string;
        compare : Expected;
    }
) : string {

    return EqualParameters(value, valid, compare, conversion);
}
