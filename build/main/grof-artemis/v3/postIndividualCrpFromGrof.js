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
            additional: args.additional
        }),
        path: {
            customerId: args.path.customerId
        }
    });
}
exports.default = postIndividualCrpFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEluZGl2aWR1YWxDcnBGcm9tR3JvZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvcG9zdEluZGl2aWR1YWxDcnBGcm9tR3JvZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJJQUFrSDtBQUdsSCxnRkFBdUQ7QUFHdkQ7O0dBRUc7QUFDWSxLQUFLLFVBQVUseUJBQXlCLENBQUMsSUFldkQ7SUFDRyxPQUFPLElBQUEsMkJBQWlCLEVBQUM7UUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsR0FBRyxFQUFFLDBCQUFnQixDQUFDLHFCQUFxQixDQUFDO1lBQ3hDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM3QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDOUIsQ0FBQztRQUNGLElBQUksRUFBRTtZQUNGLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7U0FDbkM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBMUJELDRDQTBCQyJ9