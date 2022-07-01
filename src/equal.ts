import ValueType from '@alirya/value/value';
import CompareType from './compare/compare';

/**
 * compare {@param value} with {@param compare} using == comparison
 */
export function EqualParameters<
    Value,
    Compare = Value
>(value : Value|Compare, compare : Compare) : value is Compare {

    return value == compare;
}


/**
 * compare {@param value} with {@param compare} using == comparison
 */

export function EqualParameter<
    Value,
    Compare = Value
>({
      value,
      compare
  } : ValueType<Value> & CompareType<Compare>) : boolean {

    return EqualParameters(value, compare);
}




namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
}
export default Equal;
