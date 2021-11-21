/**
 * Throw exception if given value is not equal
 */
export interface EqualArgument<Compare> {
    compare: Compare;
    error?: (value: unknown) => Error;
}
export default function EqualParameter<Compare extends unknown>(value: unknown, { compare, error }: EqualArgument<Compare>): asserts value is Compare;
