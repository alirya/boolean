import BooleanMessage from "../string/boolean";
/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function Boolean({ value, subject, conversion = value => typeof value }) {
    return new TypeError(BooleanMessage({ valid: false, value, subject, conversion }));
}
//# sourceMappingURL=boolean.js.map