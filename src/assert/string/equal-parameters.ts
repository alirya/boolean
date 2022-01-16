import SafeCast from "@alirya/string/safe-cast";

export default function EqualParameters(
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
