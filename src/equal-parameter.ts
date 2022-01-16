import ValueType from '@alirya/value/value';
import CompareType from './compare/compare';
import EqualParameters from './equal-parameters';
/**
 * compare {@param value} with {@param compare} using === comparison
 */

export default function EqualParameter<
    Value,
    Compare extends Value
>({
      value,
      compare
  } : ValueType<Value> & CompareType<Compare>) : boolean {

    return EqualParameters(value, compare);
}


