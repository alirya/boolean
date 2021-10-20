import Value from "@dikac/t-value/value";
/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export default function Boolean({ value, subject, conversion }: Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
}): TypeError;
