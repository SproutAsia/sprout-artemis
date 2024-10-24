"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postCorporateCustomer_v3_1 = __importDefault(require("../../artemis/v3/api/customer/_post/corporate/postCorporateCustomer.v3"));
const ConvertToRequest_1 = __importDefault(require("./utils/ConvertToRequest"));
/**
 * @description
 */
async function postCorporateCustomerFromGrof(args) {
    const { grof } = args;
    return (0, postCorporateCustomer_v3_1.default)({
        auth: args.auth,
        req: ConvertToRequest_1.default.toCorporateCustomer({
            application: grof.application,
            additional: args.additional,
            customFn: args.customFn,
            assigneeId: args.assigneeId
        })
    });
}
exports.default = postCorporateCustomerFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUN1c3RvbWVyLnYzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My9wb3N0Q29ycG9yYXRlQ3VzdG9tZXIudjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzSUFBMEc7QUFHMUcsZ0ZBQXVEO0FBR3ZEOztHQUVHO0FBQ1ksS0FBSyxVQUFVLDZCQUE2QixDQUFDLElBVTNEO0lBQ0csTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQTtJQUVyQixPQUFPLElBQUEsa0NBQXFCLEVBQUM7UUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsR0FBRyxFQUFFLDBCQUFnQixDQUFDLG1CQUFtQixDQUFDO1lBQ3RDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM5QixDQUFDO0tBQ0wsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQXRCRCxnREFzQkMifQ==