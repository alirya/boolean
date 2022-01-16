import ThrowableType from "../assert/throwable/boolean-parameter";
import Value from "@alirya/value/value";
import BooleanParameters from "./boolean-parameters";

/**
 * Throw exception if given value is no boolean type
 */

export interface BooleanParameterArgument extends Value<unknown> {
    error?:(value:unknown)=>Error;
}

export default function BooleanParameter({
    value,
    error = ThrowableType
} : BooleanParameterArgument) : boolean {

    return BooleanParameters(value, error);
}


