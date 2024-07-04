
const ArrayUtils = {
    toSet: (values: string[]) => {
        const prev = [] as string[]
        values.forEach((next) => {
            if(prev.includes(next)) return prev
            return prev.push(next)
        })
        return prev
    },
    /**
     * usage way no 1 : ArrayUtils.toAdvancedEnum(["A", "B"])
     * 
     * usage way no 2 : const array = ["A", "B"] as const
     * ArrayUtils.toAdvancedEnum(array)
     */
    toAdvancedEnum: <T extends string>(array: ReadonlyArray<T>) => {
        const en = {}
        array.forEach((a) => Object.assign(en, { [a]: a }))
        const obj =  {
            enum: en,
            index: array
        }

        type TypeAdvanceEnum = typeof obj & {
            enum: {
                [key in typeof array[number]]: typeof array[number]
            },
            single: typeof array[number]
        }

        return obj as TypeAdvanceEnum
    }
}

export default ArrayUtils