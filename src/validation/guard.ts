import GuardFunction from "../function/guard";

export default interface Guard<Argument, ValidType extends Argument, Arguments extends unknown[] = []> {

    validation : GuardFunction<Argument, ValidType, Arguments>;
}



