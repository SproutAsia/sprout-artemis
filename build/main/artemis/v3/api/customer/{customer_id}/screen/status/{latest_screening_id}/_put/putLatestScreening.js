"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../../../shared/ArtemisHeader"));
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function putLatestScreening(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.latestScreeningId);
    try {
        const result = await fetch(url.toString(), {
            headers,
            body: JSON.stringify(args.body),
            method: "PUT"
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = putLatestScreening;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHV0TGF0ZXN0U2NyZWVuaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjMvYXBpL2N1c3RvbWVyL3tjdXN0b21lcl9pZH0vc2NyZWVuL3N0YXR1cy97bGF0ZXN0X3NjcmVlbmluZ19pZH0vX3B1dC9wdXRMYXRlc3RTY3JlZW5pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4RkFBcUU7QUFNckU7Ozs7R0FJRztBQUNZLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxJQVdoRDtJQUNHLE1BQU0sT0FBTyxHQUFHLElBQUEsdUJBQWEsR0FBRSxDQUFBO0lBQy9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBRTdILElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsT0FBTztZQUNQLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUFnQyxDQUFBO0tBQzFDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQTtLQUNYO0FBQ0wsQ0FBQztBQTFCRCxxQ0EwQkMifQ==