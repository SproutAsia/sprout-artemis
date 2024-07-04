"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../../../shared/ArtemisHeader"));
/**
 * remove hit
 */
async function putRemoveHit(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.screenId + "/hit");
    try {
        const result = await fetch(url.toString(), {
            headers,
            method: "PUT",
            body: JSON.stringify({
                match: "NO_ACTION",
                screeningHitIds: args.body.screeningHitIds
            })
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = putRemoveHit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHV0UmVtb3ZlSGl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjMvYXBpL2N1c3RvbWVyL3tjdXN0b21lcl9pZH0vc2NyZWVuL3tzY3JlZW5faWR9L2hpdC9fcHV0L3B1dFJlbW92ZUhpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhGQUFxRTtBQUlyRTs7R0FFRztBQUNZLEtBQUssVUFBVSxZQUFZLENBQUMsSUFjMUM7SUFDRyxNQUFNLE9BQU8sR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQTtJQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFBO0lBRTdILElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsT0FBTztZQUNQLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLEtBQUssRUFBRSxXQUFXO2dCQUNsQixlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO2FBQzdDLENBQUM7U0FDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM1QixPQUFPLE1BQXVCLENBQUE7S0FDakM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFBO0tBQ1g7QUFDTCxDQUFDO0FBaENELCtCQWdDQyJ9