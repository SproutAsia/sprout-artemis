"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postIndividualCrp_1 = __importDefault(require("../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/postIndividualCrp"));
const ConvertToRequest_1 = __importDefault(require("./utils/ConvertToRequest"));
/**
 * @description
 */
async function postIndividualCrpFromGrof(args) {
    return (0, postIndividualCrp_1.default)({
        auth: args.auth,
        req: ConvertToRequest_1.default.toSingleIndividualCrp({
            member: args.grof.application.company.members,
            additional: args.additional,
            customFn: args.customFn
        }),
        path: {
            customerId: args.path.customerId
        }
    });
}
exports.default = postIndividualCrpFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEluZGl2aWR1YWxDcnBGcm9tR3JvZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvcG9zdEluZGl2aWR1YWxDcnBGcm9tR3JvZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJJQUFrSDtBQUdsSCxnRkFBdUQ7QUFHdkQ7O0dBRUc7QUFDWSxLQUFLLFVBQVUseUJBQXlCLENBQUMsSUFnQnZEO0lBQ0csT0FBTyxJQUFBLDJCQUFpQixFQUFDO1FBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLEdBQUcsRUFBRSwwQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUN4QyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNuQztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUE1QkQsNENBNEJDIn0=