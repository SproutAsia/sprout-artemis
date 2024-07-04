"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../shared/ArtemisHeader"));
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function getCustomer(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("Authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer");
    if (args.filter.customerStatus)
        url.searchParams.append("customerStatusList", args.filter.customerStatus);
    if (args.filter.customerType)
        url.searchParams.append("customerTypeList", args.filter.customerType);
    if (args.filter.referenceId)
        url.searchParams.append("referenceId", args.filter.referenceId);
    if (args.filter.riskRating)
        url.searchParams.append("riskRatingList", args.filter.riskRating);
    if (args.filter.searchString)
        url.searchParams.append("searchString", args.filter.searchString);
    const result = await fetch(url.toString(), {
        headers
    });
    if (result.status === 401)
        throw new Error("Unauthorized");
    else
        return result.json();
}
exports.default = getCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy92My9hcGkvdXNlci9tZS9fZ2V0L2dldE1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUZBQTREO0FBTzVEOzs7O0dBSUc7QUFDWSxLQUFLLFVBQVUsV0FBVyxDQUFDLElBV3pDO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUE7SUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUE7SUFDMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7UUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3pHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztRQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzVGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1FBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM3RixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRy9GLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN2QyxPQUFPO0tBQ1YsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBOztRQUNyRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQXdCLENBQUE7QUFDbkQsQ0FBQztBQTNCRCw4QkEyQkMifQ==