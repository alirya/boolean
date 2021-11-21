import Value from "@dikac/t-value/value";
/**
 * Throw exception if given value is no boolean type
 */
export interface EqualArgument<Compare> extends Value<unknown> {
    compare: Compare;
    error?: (value: unknown) => Error;
}
export default function EqualParameter<Compare extends unknown>({ value, compare, error, }: EqualArgument<Compare>): Compare;
