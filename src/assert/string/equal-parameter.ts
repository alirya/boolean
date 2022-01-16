import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import SafeCast from '@alirya/string/safe-cast';
import EqualParameters from './equal-parameters';

export default function EqualParameter<Allow, Expected>(
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
