"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorForConvertToCorporate = exports.ErrorForConvertToIndividual = void 0;
const ArrayUtils_1 = __importDefault(require("../../../share/ArrayUtils"));
const ErrorForConvert = ArrayUtils_1.default.toAdvancedEnum([
    "Country of operations cannot be empty",
    "Company name cannot be empty",
    "Payment mode cannot be empty",
    "Product service complexity cannot be empty",
    "Ownership structure layer cannot be empty",
    "Onboarding mode cannot be empty",
    "Entity type cannot be empty",
    "Industry code cannot be empty",
    "Ssic description cannot be empty",
    "Assignee ID cannot be empty"
]);
exports.ErrorForConvertToIndividual = ArrayUtils_1.default.toAdvancedEnum([
    "Role cannot be empty",
    "Country of residence cannot be empty",
    "Nationality cannot be empty",
    "Name cannot be empty"
]);
exports.ErrorForConvertToCorporate = ArrayUtils_1.default.toAdvancedEnum([
    "Company name cannot be empty",
    "Country of operation cannot be empty",
    "Country of incorporation cannot be empty",
    "Entity type cannot be empty"
]);
exports.default = ErrorForConvert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JGb3JDb252ZXJ0LmVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YzL3V0aWxzL0Vycm9yRm9yQ29udmVydC5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJFQUFrRDtBQUVsRCxNQUFNLGVBQWUsR0FBRyxvQkFBVSxDQUFDLGNBQWMsQ0FBQztJQUM5Qyx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw0Q0FBNEM7SUFDNUMsMkNBQTJDO0lBQzNDLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyw2QkFBNkI7Q0FDaEMsQ0FBQyxDQUFBO0FBRVcsUUFBQSwyQkFBMkIsR0FBRyxvQkFBVSxDQUFDLGNBQWMsQ0FBQztJQUNqRSxzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixzQkFBc0I7Q0FDekIsQ0FBQyxDQUFBO0FBRVcsUUFBQSwwQkFBMEIsR0FBRyxvQkFBVSxDQUFDLGNBQWMsQ0FBQztJQUNoRSw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyw2QkFBNkI7Q0FDaEMsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsZUFBZSxDQUFBIn0=