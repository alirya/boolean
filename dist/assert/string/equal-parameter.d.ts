import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function EqualParameter<Allow, Expected>({ value, //: [value, compare],
valid, compare, conversion }: Validatable & Value<Allow> & {
    conversion?: (value: Expected | Allow) => string;
    compare: Expected;
}): string;
