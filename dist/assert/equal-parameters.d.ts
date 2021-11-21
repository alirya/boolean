/**
 * Throw exception if given value is not equal
 */
export default function EqualParameters<Compare extends unknown>(value: unknown, compare: Compare, error?: (value: unknown) => Error): asserts value is Compare;
