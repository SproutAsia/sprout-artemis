"use strict";
/* eslint-disable import/order */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisHeader_1 = __importDefault(require("../../../shared/ArtemisHeader"));
const CheckMock_1 = __importDefault(require("../../../shared/CheckMock"));
const res_mock_1 = require("./res.mock");
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function getCustomer(args) {
    var _a, _b;
    // MOCK MODE
    if ((0, CheckMock_1.default)())
        return res_mock_1.ResGetCustomerMock;
    const headers = (0, ArtemisHeader_1.default)();
    headers.append("Authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer");
    if (args.filter.customerStatus)
        url.searchParams.append("customerStatusList", args.filter.customerStatus);
    if (args.filter.customerType)
        url.searchParams.append("customerTypeList[0]", args.filter.customerType);
    if (args.filter.referenceId)
        url.searchParams.append("referenceId", args.filter.referenceId);
    if (args.filter.riskRating)
        url.searchParams.append("riskRatingList", args.filter.riskRating);
    if (args.filter.searchString)
        url.searchParams.append("searchString", args.filter.searchString);
    if (args.pagination.size)
        url.searchParams.append("size", (_a = args.pagination) === null || _a === void 0 ? void 0 : _a.size.toString());
    if (args.pagination.page)
        url.searchParams.append("page", (_b = args.pagination) === null || _b === void 0 ? void 0 : _b.page.toString());
    const result = await fetch(url.toString(), {
        headers
    }).then((res) => res.json());
    return result;
}
exports.default = getCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy92My9hcGkvY3VzdG9tZXIvX2dldC9nZXRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQWlDOzs7OztBQUVqQyxrRkFBeUQ7QUFDekQsMEVBQWlEO0FBRWpELHlDQUErQztBQUkvQzs7OztHQUlHO0FBQ1ksS0FBSyxVQUFVLFdBQVcsQ0FBQyxJQWV6Qzs7SUFDRyxZQUFZO0lBQ1osSUFBSSxJQUFBLG1CQUFTLEdBQUU7UUFBRSxPQUFPLDZCQUFrQixDQUFBO0lBRTFDLE1BQU0sT0FBTyxHQUFHLElBQUEsdUJBQWEsR0FBRSxDQUFBO0lBQy9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO0lBQzFELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1FBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN6RyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7UUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1RixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtRQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDN0YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMvRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtRQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFFM0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3ZDLE9BQU87S0FDVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQTZCLENBQUE7SUFDeEQsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQztBQWxDRCw4QkFrQ0MifQ==