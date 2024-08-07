"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../../../../shared/ArtemisHeader"));
/**
 * GET crp profile
 */
async function getCrpProfile(args) {
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("Authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/profile/" + args.filter.customerType + `/${args.filter.customerId}`);
    if (args.filter.customerType)
        url.searchParams.append("type", args.filter.customerType);
    url.searchParams.append("searchString", args.filter.searchString || "");
    // url.searchParams.append("mainCustomerId", args.filter.customerId)
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
exports.default = getCrpProfile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q3JwUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL2FwaS9jdXN0b21lci9wcm9maWxlL3tjdXN0b21lclR5cGV9L3tjdXN0b21lcklkfS9fZ2V0L2dldENycFByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyRkFBa0U7QUFJbEU7O0dBRUc7QUFDWSxLQUFLLFVBQVUsYUFBYSxDQUFDLElBUzNDO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUE7SUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7SUFFN0gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN2RixHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUE7SUFDdkUsb0VBQW9FO0lBRXBFLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsT0FBTztTQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBK0IsQ0FBQTtRQUMxRCxPQUFPLE1BQU0sQ0FBQTtLQUNoQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtBQUNMLENBQUM7QUExQkQsZ0NBMEJDIn0=