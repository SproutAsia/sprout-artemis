"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../shared/ArtemisHeader"));
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function postScreen(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/screen");
    if (args.query.includeCrp)
        url.searchParams.append('includeCrp', args.query.includeCrp ? "true" : "");
    if (args.query.onlyUpdated)
        url.searchParams.append('onlyUpdated', args.query.onlyUpdated ? "true" : "");
    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            headers
        }).then((res) => res.text());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = postScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL2FwaS9jdXN0b21lci97Y3VzdG9tZXJfaWR9L3NjcmVlbi9fcG9zdC9wb3N0U2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0ZBQStEO0FBSS9EOzs7O0dBSUc7QUFDWSxLQUFLLFVBQVUsVUFBVSxDQUFDLElBV3hDO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUE7SUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFBO0lBQy9GLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1FBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXhHLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPO1NBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUFNLENBQUE7S0FDaEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFBO0tBQ1g7QUFDTCxDQUFDO0FBM0JELDZCQTJCQyJ9