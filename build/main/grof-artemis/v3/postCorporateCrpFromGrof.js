"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postCorporateCrp_1 = __importDefault(require("../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/postCorporateCrp"));
const ConvertToRequest_1 = __importDefault(require("./utils/ConvertToRequest"));
/**
 * @description
 */
async function postCorporateCrpFromGrof(args) {
    const { member } = args.grof.application.company;
    return (0, postCorporateCrp_1.default)({
        auth: args.auth,
        req: ConvertToRequest_1.default.toSingleCorporateCrp({
            member: member
        }),
        path: {
            customerId: args.path.customerId
        }
    });
}
exports.default = postCorporateCrpFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUNycEZyb21Hcm9mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My9wb3N0Q29ycG9yYXRlQ3JwRnJvbUdyb2YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3SUFBK0c7QUFHL0csZ0ZBQXVEO0FBR3ZEOztHQUVHO0FBQ1ksS0FBSyxVQUFVLHdCQUF3QixDQUFDLElBY3REO0lBQ0csTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtJQUVoRCxPQUFPLElBQUEsMEJBQWdCLEVBQUM7UUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsR0FBRyxFQUFFLDBCQUFnQixDQUFDLG9CQUFvQixDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUM7UUFDRixJQUFJLEVBQUU7WUFDRixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1NBQ25DO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQTFCRCwyQ0EwQkMifQ==