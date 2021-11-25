import ThrowableType from "../assert/throwable/boolean-parameter";
import AssertType from "../assert/boolean";
import Value from "@dikac/t-value/value";
import BooleanParameters from "./boolean-parameters";

/**
 * Throw exception if given value is no boolean type
 */

export interface BooleanArgument extends Value<unknown> {
    error?:(value:unknown)=>Error;
}

export default function BooleanParameter({
    value,
    error = ThrowableType
} : BooleanArgument) : boolean {

    return BooleanParameters(value, error);
}


