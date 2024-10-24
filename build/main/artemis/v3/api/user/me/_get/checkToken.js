"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../shared/ArtemisHeader"));
/**
 * to check token
 */
async function checkToken(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("Authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/user/me");
    const result = await fetch(url.toString(), {
        headers
    });
    console.log(">>> RESULT", result.status);
    const isActive = result.status !== 401;
    if (isActive) {
        const user = await result.json();
        return {
            isActive,
            user
        };
    }
    return {
        isActive,
        user: null
    };
}
exports.default = checkToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tUb2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL2FwaS91c2VyL21lL19nZXQvY2hlY2tUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFGQUE0RDtBQUc1RDs7R0FFRztBQUNZLEtBQUssVUFBVSxVQUFVLENBQUMsSUFJeEM7SUFDRyxNQUFNLE9BQU8sR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQTtJQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQTtJQUV6RCxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDdkMsT0FBTztLQUNWLENBQUMsQ0FBQTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQTtJQUN0QyxJQUFJLFFBQVEsRUFBRTtRQUNWLE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2hDLE9BQU87WUFDSCxRQUFRO1lBQ1IsSUFBSTtTQUNQLENBQUE7S0FDSjtJQUNELE9BQU87UUFDSCxRQUFRO1FBQ1IsSUFBSSxFQUFFLElBQUk7S0FDYixDQUFBO0FBQ0wsQ0FBQztBQXpCRCw2QkF5QkMifQ==