/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameters(value, valid, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('boolean');
    // let sentence = SentencesMust(valid);
    // sentence.expect.push('boolean');
    // sentence.subject.push(subject);
    //
    // sentence.comma.push('expect');
    if (!valid) {
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=boolean-parameters.js.map