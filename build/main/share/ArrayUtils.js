"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayUtils = {
    toSet: (values) => {
        const prev = [];
        values.forEach((next) => {
            if (prev.includes(next))
                return prev;
            return prev.push(next);
        });
        return prev;
    },
    /**
     * usage way no 1 : ArrayUtils.toAdvancedEnum(["A", "B"])
     *
     * usage way no 2 : const array = ["A", "B"] as const
     * ArrayUtils.toAdvancedEnum(array)
     */
    toAdvancedEnum: (array) => {
        const en = {};
        array.forEach((a) => Object.assign(en, { [a]: a }));
        const obj = {
            enum: en,
            index: array
        };
        return obj;
    }
};
exports.default = ArrayUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZS9BcnJheVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxVQUFVLEdBQUc7SUFDZixLQUFLLEVBQUUsQ0FBQyxNQUFnQixFQUFFLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsRUFBYyxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNwQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFBO1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0gsY0FBYyxFQUFFLENBQW1CLEtBQXVCLEVBQUUsRUFBRTtRQUMxRCxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDYixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sR0FBRyxHQUFJO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUE7UUFTRCxPQUFPLEdBQXNCLENBQUE7SUFDakMsQ0FBQztDQUNKLENBQUE7QUFFRCxrQkFBZSxVQUFVLENBQUEifQ==