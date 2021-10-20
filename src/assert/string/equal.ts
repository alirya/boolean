import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Sentences from "@dikac/t-string/message/sentences";
import SafeCast from "@dikac/t-string/safe-cast";

export default function Equal(
    {
        value,
        valid,
        conversion = SafeCast
    } : Validatable & Value<[unknown, unknown]> & {conversion ?: (value:unknown)=>string}
) : string {

    const parts : string[] = [];

    parts.push(`'${conversion(value[0])}'`);

    if(valid) {

        parts.push('is');

    } else {

        parts.push('is not');
    }

    parts.push('equal to');
    parts.push(`'${conversion(value[1])}'`);

    return parts.join(' ') + '.';
}
