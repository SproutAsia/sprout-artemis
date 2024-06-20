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
async function postCorporateCustomer(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer");
    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then(async (res) => {
            return res.json();
        });
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = postCorporateCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUN1c3RvbWVyLnYzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjMvYXBpL2N1c3RvbWVyL19wb3N0L2NvcnBvcmF0ZS9wb3N0Q29ycG9yYXRlQ3VzdG9tZXIudjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxxRkFBNEQ7QUFPNUQ7Ozs7R0FJRztBQUNZLEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxJQUtuRDtJQUNHLE1BQU0sT0FBTyxHQUFHLElBQUEsdUJBQWEsR0FBRSxDQUFBO0lBQy9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO0lBRTFELElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlCLE9BQU87U0FDVixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBbUMsQ0FBQTtLQUM3QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtBQUNMLENBQUM7QUF0QkQsd0NBc0JDIn0=