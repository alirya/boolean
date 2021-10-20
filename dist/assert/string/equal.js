import SafeCast from "@dikac/t-string/safe-cast";
export default function Equal({ value, valid, conversion = SafeCast }) {
    const parts = [];
    parts.push(`'${conversion(value[0])}'`);
    if (valid) {
        parts.push('is');
    }
    else {
        parts.push('is not');
    }
    parts.push('equal to');
    parts.push(`'${conversion(value[1])}'`);
    return parts.join(' ') + '.';
}
//# sourceMappingURL=equal.js.map