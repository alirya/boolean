export default interface Guard<Allow, Expect, Arguments extends unknown[] = []> {

    (value :Allow|Expect, ...extras : Arguments) : value is Expect;
}



