"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../shared/ArtemisHeader"));
/**
 * update customer
 */
async function putCustomer(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer");
    try {
        const result = await fetch(url.toString(), {
            method: "PUT",
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
exports.default = putCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHV0Q3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy92My9hcGkvY3VzdG9tZXIvX3B1dC9wdXRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGtGQUF5RDtBQU16RDs7R0FFRztBQUNZLEtBQUssVUFBVSxXQUFXLENBQUMsSUFLekM7SUFDRyxNQUFNLE9BQU8sR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQTtJQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQTtJQUUxRCxJQUFJO1FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM5QixPQUFPO1NBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE1BQXlCLENBQUE7S0FDbkM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFBO0tBQ1g7QUFDTCxDQUFDO0FBdEJELDhCQXNCQyJ9