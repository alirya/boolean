import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Assert from "../../assert/string/boolean";

export default function Boolean(object : Readonly<Value & Validatable>) : string {

    return Assert(object)
}
