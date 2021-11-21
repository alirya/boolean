import SafeCast from "@dikac/t-string/safe-cast";
export default function EqualParameters(value, valid, compare, conversion = SafeCast) {
    const parts = [];
    parts.push(`'${conversion(value)}'`);
    if (valid) {
        parts.push('is');
    }
    else {
        parts.push('is not');
    }
    parts.push('equal to');
    parts.push(`'${conversion(compare)}'`);
    return parts.join(' ') + '.';
}
//# sourceMappingURL=equal-parameters.js.map