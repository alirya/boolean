import BooleanParameters from "./boolean-parameters";
/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameter({ value, subject, conversion = value => typeof value }) {
    return BooleanParameters(value, subject, conversion);
}
//# sourceMappingURL=boolean-parameter.js.map