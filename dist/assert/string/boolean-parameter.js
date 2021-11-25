import BooleanParameters from "./boolean-parameters";
/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameter({ valid, value, subject = 'type', conversion = value => typeof value }) {
    return BooleanParameters(value, valid, subject, conversion);
}
//# sourceMappingURL=boolean-parameter.js.map