import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Sentences from "@dikac/t-string/message/sentences";
import SafeCast from "@dikac/t-string/safe-cast";

export default function Equal(
    object : Validatable & Value<[unknown, unknown]>
) : string {

    const parts : string[] = [];

    parts.push(`'${SafeCast(object.value[0])}'`);

    if(object.valid) {

        parts.push('is');

    } else {

        parts.push('is not');
    }

    parts.push('equal to');
    parts.push(`'${SafeCast(object.value[1])}'`);

    return parts.join(' ') + '.';
}
