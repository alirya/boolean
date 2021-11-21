import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import SafeCast from "@dikac/t-string/safe-cast";
import EqualParameters from "./equal-parameters";

export default function EqualParameter(
    {
        value : [value, compare],
        valid,
        conversion = SafeCast
    } : Validatable & Value<[unknown, unknown]> & {conversion ?: (value:unknown)=>string}
) : string {

    return EqualParameters(value, valid, compare, conversion);
}
