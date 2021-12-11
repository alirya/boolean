/**
 * compare {@param value} with {@param compare} using === comparison
 */
export default function EqualParameters<
    Value,
    Compare extends Value
>(value : Value|Compare, compare : Compare) : value is Compare {

    return value === compare;
}


