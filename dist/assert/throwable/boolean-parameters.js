import BooleanMessage from "../string/boolean-parameters";
/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameters(value, subject, conversion) {
    return new TypeError(BooleanMessage(value, false, subject, conversion));
}
//# sourceMappingURL=boolean-parameters.js.map