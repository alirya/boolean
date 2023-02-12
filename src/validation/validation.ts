import ValidationFunction from '../function/validation.js';

export default interface Validation<Arguments extends unknown[], Return extends boolean = boolean> {

    validation : ValidationFunction<Arguments, Return>;
}
