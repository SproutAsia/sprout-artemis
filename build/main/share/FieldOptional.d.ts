export type FieldOptional<T> = {
    [P in keyof T]?: T[P] extends Record<string, unknown> ? FieldOptional<T[P]> : T[P];
};
