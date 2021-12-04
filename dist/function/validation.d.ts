export default interface Validation<Arguments extends unknown[], Return extends boolean = boolean> {
    (...arg: Arguments): Return;
}
