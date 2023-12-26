import ValueType from '@axiona/value/value.js';
import CompareType from './compare/compare.js';

/**
 * compare {@param value} with {@param compare} using == comparison
 */
export function EqualParameters<
    Value,
    Compare = Value
>(value : Value|Compare, compare : Compare) : value is Compare {

    return value == compare;
}

export type EqualArgument<
  Value,
  Compare = Value
  > = ValueType<Value> & CompareType<Compare>;

/**
 * compare {@param value} with {@param compare} using == comparison
 */

export function EqualParameter<
    Value,
    Compare = Value
>({
      value,
      compare
  } : EqualArgument<Value, Compare>) : boolean {

    return EqualParameters(value, compare);
}




namespace Equal {
    export const Parameters = EqualParameters;
    export const Parameter = EqualParameter;
    export type Argument<
      Value,
      Compare = Value
      > = EqualArgument<Value, Compare>;
}
export default Equal;
