import ValueType from '@axiona/value/value.js';
import CompareType from './compare/compare.js';
/**
 * compare {@param value} with {@param compare} using === comparison
 */
export function EqualStrictParameters<
    Value,
    Compare extends Value
>(value : Value|Compare, compare : Compare) : value is Compare {

    return value === compare;
}


/**
 * compare {@param value} with {@param compare} using === comparison
 */

export function EqualStrictParameter<
    Value,
    Compare extends Value
>({
      value,
      compare
} : ValueType<Value> & CompareType<Compare>) : boolean {

    return EqualStrictParameters(value, compare);
}


namespace EqualStrict {
    export const Parameters = EqualStrictParameters;
    export const Parameter = EqualStrictParameter;
}
export default EqualStrict;
