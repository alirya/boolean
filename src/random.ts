/**
 * non cryptographic boolean random
 */
export default function Random() : boolean {

    return ! (parseInt(Math.random().toString().slice(2, 3)) % 2);
}
