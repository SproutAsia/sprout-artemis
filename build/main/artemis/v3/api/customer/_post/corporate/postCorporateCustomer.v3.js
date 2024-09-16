"use strict";
/* eslint-disable import/order */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../shared/ArtemisHeader"));
const CheckMock_1 = __importDefault(require("../../../../shared/CheckMock"));
const res_mock_1 = require("./res.mock");
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function postCorporateCustomer(args) {
    if ((0, CheckMock_1.default)())
        return res_mock_1.ResPostCustomerMock;
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer");
    const result = await fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify(args.req),
        headers
    }).then(async (res) => {
        return res.json();
    });
    return result;
}
exports.default = postCorporateCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUN1c3RvbWVyLnYzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjMvYXBpL2N1c3RvbWVyL19wb3N0L2NvcnBvcmF0ZS9wb3N0Q29ycG9yYXRlQ3VzdG9tZXIudjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFpQzs7Ozs7QUFFakMscUZBQTREO0FBQzVELDZFQUFvRDtBQUVwRCx5Q0FBZ0Q7QUFJaEQ7Ozs7R0FJRztBQUNZLEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxJQUtuRDtJQUNHLElBQUksSUFBQSxtQkFBUyxHQUFFO1FBQUUsT0FBTyw4QkFBbUIsQ0FBQTtJQUUzQyxNQUFNLE9BQU8sR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQTtJQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQTtJQUUxRCxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDdkMsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzlCLE9BQU87S0FDVixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNsQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNGLE9BQU8sTUFBbUMsQ0FBQTtBQUM5QyxDQUFDO0FBcEJELHdDQW9CQyJ9