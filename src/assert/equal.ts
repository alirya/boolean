import ThrowableType from "./throwable/boolean";
import Callback from "@dikac/t-function/assert/callback";
import EqualValidation from "../equal";

/**
 * Throw exception if given value is not equal
 */

export default function Equal<Compare extends unknown>(
    value : unknown,
    compare : Compare,
    error : (value:unknown)=>Error = ThrowableType
) : asserts value is Compare {

    Callback<unknown>(value, EqualValidation, error, compare);
}
