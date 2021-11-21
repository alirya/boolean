import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
/**
 * make a string message for boolean type
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function BooleanParameter({ valid, value, subject, conversion }: Validatable & Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
}): string;
