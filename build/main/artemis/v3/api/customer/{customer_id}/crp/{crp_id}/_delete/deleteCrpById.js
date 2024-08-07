"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../../shared/ArtemisHeader"));
/**
 * delete crp by id
 */
async function deleteCrpById(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("Authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp/" + args.path.crpId);
    const result = await fetch(url.toString(), {
        headers,
        method: "DELETE"
    }).then((res) => res.json());
    return result;
}
exports.default = deleteCrpById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlQ3JwQnlJZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL2FwaS9jdXN0b21lci97Y3VzdG9tZXJfaWR9L2NycC97Y3JwX2lkfS9fZGVsZXRlL2RlbGV0ZUNycEJ5SWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyRkFBa0U7QUFHbEU7O0dBRUc7QUFDWSxLQUFLLFVBQVUsYUFBYSxDQUFDLElBUTNDO0lBQ0MsTUFBTSxPQUFPLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUE7SUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTlHLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN6QyxPQUFPO1FBQ1AsTUFBTSxFQUFFLFFBQVE7S0FDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUE0QixDQUFBO0lBQ3ZELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQWxCRCxnQ0FrQkMifQ==