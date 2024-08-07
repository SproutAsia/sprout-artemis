"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../../shared/ArtemisHeader"));
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function getScreenSummary(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/summary");
    const result = await fetch(url.toString(), {
        headers
    }).then((res) => res.ok ? res.json() : res.text());
    if (typeof result === "string" && result === "") {
        throw new Error("Screening summary not found");
    }
    return result;
}
exports.default = getScreenSummary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2NyZWVuU3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL2FwaS9jdXN0b21lci97Y3VzdG9tZXJfaWR9L3NjcmVlbi9zdW1tYXJ5L19nZXQvZ2V0U2NyZWVuU3VtbWFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJGQUFrRTtBQUtsRTs7OztHQUlHO0FBQ1ksS0FBSyxVQUFVLGdCQUFnQixDQUFDLElBTzlDO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUE7SUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLENBQUE7SUFFdEcsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3ZDLE9BQU87S0FDVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2xELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7UUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0tBQ2pEO0lBQ0QsT0FBTyxNQUE4QixDQUFBO0FBQ3pDLENBQUM7QUFuQkQsbUNBbUJDIn0=