import BooleanMessage from "../string/boolean-parameters";

/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameters(
    value: unknown,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : TypeError {

    return new TypeError(BooleanMessage(value, false, subject, conversion))
}
