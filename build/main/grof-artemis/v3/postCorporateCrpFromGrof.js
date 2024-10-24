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
            member: member,
            additional: args.additional,
            customFn: args.customFn
        }),
        path: {
            customerId: args.path.customerId
        }
    });
}
exports.default = postCorporateCrpFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUNycEZyb21Hcm9mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My9wb3N0Q29ycG9yYXRlQ3JwRnJvbUdyb2YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3SUFBK0c7QUFHL0csZ0ZBQXVEO0FBR3ZEOztHQUVHO0FBQ1ksS0FBSyxVQUFVLHdCQUF3QixDQUFDLElBZ0J0RDtJQUNHLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7SUFFaEQsT0FBTyxJQUFBLDBCQUFnQixFQUFDO1FBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLEdBQUcsRUFBRSwwQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztZQUN2QyxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztRQUNGLElBQUksRUFBRTtZQUNGLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7U0FDbkM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBOUJELDJDQThCQyJ9