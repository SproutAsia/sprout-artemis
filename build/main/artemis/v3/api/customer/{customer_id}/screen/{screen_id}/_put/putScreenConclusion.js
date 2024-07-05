"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../../shared/ArtemisHeader"));
/**
 * update screening conclusion
 */
async function putScreenConclusion(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.screenId);
    const result = await fetch(url.toString(), {
        headers,
        method: "PUT",
        body: JSON.stringify({
            conclusions: args.body.conclusions,
            screeningId: args.path.screenId
        })
    }).then((res) => res.json());
    return result;
}
exports.default = putScreenConclusion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHV0U2NyZWVuQ29uY2x1c2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL2FwaS9jdXN0b21lci97Y3VzdG9tZXJfaWR9L3NjcmVlbi97c2NyZWVuX2lkfS9fcHV0L3B1dFNjcmVlbkNvbmNsdXNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyRkFBa0U7QUFLbEU7O0dBRUc7QUFDWSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsSUFjakQ7SUFDRyxNQUFNLE9BQU8sR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQTtJQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFcEgsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3ZDLE9BQU87UUFDUCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDbEMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUNsQyxDQUFDO0tBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDNUIsT0FBTyxNQUFpQyxDQUFBO0FBQzVDLENBQUM7QUE1QkQsc0NBNEJDIn0=