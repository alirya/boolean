import ValidationFunction from "../function/validation";
export default interface Validation<Arguments extends unknown[], Return extends boolean = boolean> {
    validation: ValidationFunction<Arguments, Return>;
}
