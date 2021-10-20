import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function Equal({ value, valid, conversion }: Validatable & Value<[unknown, unknown]> & {
    conversion?: (value: unknown) => string;
}): string;
