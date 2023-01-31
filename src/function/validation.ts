export default interface Validation<Arguments extends unknown[], Return extends boolean = boolean> {
    (...arg: Arguments) : Return;
}

export interface ValidationAsync<Arguments extends unknown[], Return extends boolean = boolean> {
    (...arg: Arguments) : Promise<Return>;
}

export interface ValidationAsyncable<Arguments extends unknown[], Return extends boolean = boolean> {
    (...arg: Arguments) : Return|Promise<Return>;
}

