import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import BooleanParameters from "./boolean-parameters";

/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value => typeof value
    } : Validatable & Value & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return BooleanParameters(value, valid, subject, conversion);
}
