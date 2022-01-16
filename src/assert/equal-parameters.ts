import ThrowableType from "./throwable/boolean-parameter";
import Callback from "@alirya/function/assert/callback-parameters";
import EqualValidation from "../equal";

/**
 * Throw exception if given value is not equal
 */

export default function EqualParameters<Compare extends unknown>(
    value : unknown,
    compare : Compare,
    error : (value:unknown)=>Error = ThrowableType
) : asserts value is Compare {

    Callback<unknown>(value, EqualValidation, error, compare);
}
