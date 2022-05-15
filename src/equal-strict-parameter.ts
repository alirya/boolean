import ValueType from '@alirya/value/value';
import CompareType from './compare/compare';
import EqualParameters from './equal-strict-parameters';
/**
 * compare {@param value} with {@param compare} using === comparison
 */

export default function EqualStrictParameter<
    Value,
    Compare extends Value
>({
      value,
      compare
  } : ValueType<Value> & CompareType<Compare>) : boolean {

    return EqualParameters(value, compare);
}


