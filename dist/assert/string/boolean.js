import SentencesMust from "@dikac/t-string/message/sentences-must";
/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function Boolean({ valid, value, subject = 'type', conversion = value => typeof value }) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('boolean');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=boolean.js.map