/**
 * compare {@param value} with {@param compare} using === comparison
 */
export default function Equal<Value, Compare>(value: Value | Compare, compare: Compare): value is Compare;
