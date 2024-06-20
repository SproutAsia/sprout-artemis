"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Individual Workflow - STEP 2a : Get Record ID and CRP ID
 * @description Corporate Workflow - STEP 3a : Get Record ID and CRP ID
 */
async function getCustomerCrps(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/crps/");
    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = getCustomerCrps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q3VzdG9tZXJDcnBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjIvYXBpL2N1c3RvbWVycy97Y3VzdG9tZXJfaWR9L2NycHMvX2dldC9nZXRDdXN0b21lckNycHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7O0dBR0c7QUFDWSxLQUFLLFVBQVUsZUFBZSxDQUFDLElBTzdDO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtJQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUE7SUFFOUYsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QyxPQUFPO1NBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUE2QixDQUFBO0tBQ3ZDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQTtLQUNYO0FBQ0wsQ0FBQztBQXBCRCxrQ0FvQkMifQ==