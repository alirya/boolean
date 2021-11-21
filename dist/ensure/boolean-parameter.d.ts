import Value from "@dikac/t-value/value";
/**
 * Throw exception if given value is no boolean type
 */
export interface BooleanArgument extends Value<unknown> {
    error?: (value: unknown) => Error;
}
export default function BooleanParameter({ value, error }: BooleanArgument): boolean;
