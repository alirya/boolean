import BooleanMessage from "../string/boolean-parameter";
import Value from "@dikac/t-value/value";
import BooleanParameters from "./boolean-parameters";

/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameter(
    {
        value,
        subject,
        conversion = value => typeof value
    } : Value & {subject ?: string} & {conversion ?: (value:unknown)=>string}
) : TypeError {

    return BooleanParameters(value, subject, conversion);
}
