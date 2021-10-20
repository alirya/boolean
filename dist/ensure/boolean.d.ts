import Value from "@dikac/t-value/value";
/**
 * Throw exception if given value is no boolean type
 */
export interface Argument extends Value<unknown> {
    error?: (value: unknown) => Error;
}
export default function Boolean({ value, error }: Argument): boolean;
