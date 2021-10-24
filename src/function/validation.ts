type Validation<Arguments extends unknown[], Return extends boolean = boolean> = (...arg:Arguments)=>Return;
export default Validation;
