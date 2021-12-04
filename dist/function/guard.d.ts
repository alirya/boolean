export default interface Guard<Argument, ValidType extends Argument, Arguments extends unknown[] = []> {
    (value: Argument, ...extras: Arguments): value is ValidType;
}
