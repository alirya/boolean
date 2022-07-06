import SafeCast from '@alirya/string/safe-cast.js';
import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';

export function EqualParameters(
    value : unknown,
    valid : boolean,
    compare : unknown,
    conversion : (value:unknown)=>string = SafeCast
) : string {

    const parts : string[] = [];

    parts.push(`'${conversion(value)}'`);

    if(valid) {

        parts.push('is');

    } else {

        parts.push('is not');
    }

    parts.push('equal to');
    parts.push(`'${conversion(compare)}'`);

    return parts.join(' ') + '.';
}


export function EqualParameter<Allow, Expected>(
    {
        value,
        valid,
        compare,
        conversion = SafeCast
    } : Validatable & Value<Allow> & {
        conversion ?: (value:Expected|Allow)=>string;
        compare : Expected;
    }
) : string {

    return EqualParameters(value, valid, compare, conversion);
}


namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
