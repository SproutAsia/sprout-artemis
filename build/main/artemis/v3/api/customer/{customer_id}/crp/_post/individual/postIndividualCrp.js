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
async function postIndividualCrp(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp");
    const result = await fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify(args.req),
        headers
    }).then((res) => res.json());
    return result;
}
exports.default = postIndividualCrp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEluZGl2aWR1YWxDcnAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy92My9hcGkvY3VzdG9tZXIve2N1c3RvbWVyX2lkfS9jcnAvX3Bvc3QvaW5kaXZpZHVhbC9wb3N0SW5kaXZpZHVhbENycC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJGQUFrRTtBQUtsRTs7OztHQUlHO0FBQ1ksS0FBSyxVQUFVLGlCQUFpQixDQUFDLElBUS9DO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUE7SUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFBO0lBRTNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN2QyxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDOUIsT0FBTztLQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzVCLE9BQU8sTUFBK0IsQ0FBQTtBQUMxQyxDQUFDO0FBbkJELG9DQW1CQyJ9