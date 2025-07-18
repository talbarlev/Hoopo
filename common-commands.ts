export function isEnumValue<T extends object>(enumObj: T, value: unknown): value is T[keyof T] {
    return Object.values(enumObj).includes(value);
}