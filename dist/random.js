/**
 * non cryptographic boolean random
 */
export default function Random() {
    return !(parseInt(Math.random().toString().slice(2, 3)) % 2);
}
//# sourceMappingURL=random.js.map