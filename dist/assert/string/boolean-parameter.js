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
    //
    // let sentence = SentencesMust(valid);
    // sentence.expect.push('boolean');
    // sentence.subject.push(subject);
    //
    // sentence.comma.push('expect');
    //
    // if(!valid) {
    //
    //     sentence.actual.push('actual', conversion(value));
    // }
    //
    // return sentence.message;
}
//# sourceMappingURL=boolean-parameter.js.map