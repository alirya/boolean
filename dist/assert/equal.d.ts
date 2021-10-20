/**
 * Throw exception if given value is not equal
 */
export interface Argument<Compare> {
    compare: Compare;
    error?: (value: unknown) => Error;
}
export default function Equal<Compare extends unknown>(value: unknown, { compare, error }: Argument<Compare>): asserts value is Compare;
