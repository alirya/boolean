import BooleanMessage from "../string/boolean";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function Boolean(
    {
        value,
        subject,
        conversion = value => typeof value
    } : Value & {subject ?: string} & {conversion ?: (value:unknown)=>string}
) : TypeError {

    return new TypeError(BooleanMessage({valid:false, value, subject, conversion}))
}
