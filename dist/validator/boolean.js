import NumberValidatable from "../validatable/boolean";
/**
 * {@see Validator} for boolean type
 */
export default function Boolean(message) {
    return function (value) {
        return NumberValidatable(value, message);
    };
}
//# sourceMappingURL=boolean.js.map