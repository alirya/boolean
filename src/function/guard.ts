export default interface Guard<Allow = unknown, Expect = unknown, Arguments extends unknown[] = []> {

    (value :Allow|Expect, ...extras : Arguments) : value is Expect;
}


export type GuardInferValue<Value> = GuardInferAllow<Value> | GuardInferExpect<Value>;
export type GuardInferAllow<Allow> = Allow extends Guard<infer As, any, any> ? As : never;
export type GuardInferExpect<Expect> = Expect extends Guard<any, infer As, any> ? As : never;
export type GuardInferArguments<Arguments> = Arguments extends Guard<any, any, infer As> ? As : never;
