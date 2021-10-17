import SafeCast from "@dikac/t-string/safe-cast";
export default function Equal(object) {
    const parts = [];
    parts.push(`'${SafeCast(object.value[0])}'`);
    if (object.valid) {
        parts.push('is');
    }
    else {
        parts.push('is not');
    }
    parts.push('equal to');
    parts.push(`'${SafeCast(object.value[1])}'`);
    return parts.join(' ') + '.';
}
//# sourceMappingURL=equal.js.map