declare const ArrayUtils: {
    toSet: (values: string[]) => string[];
    /**
     * usage way no 1 : ArrayUtils.toAdvancedEnum(["A", "B"])
     *
     * usage way no 2 : const array = ["A", "B"] as const
     * ArrayUtils.toAdvancedEnum(array)
     */
    toAdvancedEnum: <T extends string>(array: readonly T[]) => {
        enum: {};
        index: readonly T[];
    } & {
        enum: { [key in T]: T; };
        single: T;
    };
};
export default ArrayUtils;
