import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';

/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function BooleanParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('boolean');

    if(!valid) {

        strings[2] = strings[2] + ',';

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}


/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function BooleanParameter(
    {
        valid,
        value,
        subject = 'type',
        conversion = value => typeof value
    } : Validatable & Value & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return BooleanParameters(value, valid, subject, conversion);
}


namespace Boolean {
    export const Parameters = BooleanParameters;
    export const Parameter = BooleanParameter;
}
export default Boolean;
