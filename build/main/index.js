"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postLogin_1 = __importDefault(require("./artemis/v3/api/authentication/login/_post/postLogin"));
const getCustomer_1 = __importDefault(require("./artemis/v3/api/customer/_get/getCustomer"));
const putCustomer_1 = __importDefault(require("./artemis/v3/api/customer/_put/putCustomer"));
const getCrpProfile_1 = __importDefault(require("./artemis/v3/api/customer/profile/{customerType}/{customerId}/_get/getCrpProfile"));
const getCustomerById_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/_get/getCustomerById"));
const postApproval_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/approval/_post/postApproval"));
const getCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_get/getCrp"));
const postCorporateCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_post/corporate/postCorporateCrp"));
const postIndividualCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_post/individual/postIndividualCrp"));
const putCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_put/putCrp"));
const deleteCrpById_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/{crp_id}/_delete/deleteCrpById"));
const getCrpById_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/{crp_id}/_get/getCrpById"));
const getRiskReport_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/risk-assessment/_get/getRiskReport"));
const getCustomerScreen_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/_get/getCustomerScreen"));
const postScreen_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/_post/postScreen"));
const getScreenSummary_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/summary/_get/getScreenSummary"));
const putScreenConclusion_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/_put/putScreenConclusion"));
const getHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_get/getHit"));
const putRemoveHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_put/putRemoveHit"));
const checkToken_1 = __importDefault(require("./artemis/v3/api/user/me/_get/checkToken"));
const getMe_1 = __importDefault(require("./artemis/v3/api/user/me/_get/getMe"));
const checkEnv_1 = __importDefault(require("./grof-artemis/v3/checkEnv"));
const postCorporateCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postCorporateCrpFromGrof"));
const postCorporateCustomer_v3_1 = __importDefault(require("./grof-artemis/v3/postCorporateCustomer.v3"));
const postIndividualCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postIndividualCrpFromGrof"));
const ConvertToRequest_1 = __importDefault(require("./grof-artemis/v3/utils/ConvertToRequest"));
const ArtemisGrofService = {
    checkEnv: checkEnv_1.default,
    postLogin: postLogin_1.default,
    postCorporateCrpFromGrof: postCorporateCrpFromGrof_1.default,
    postCorporateCrp: postCorporateCrp_1.default,
    postIndividualCrpFromGrof: postIndividualCrpFromGrof_1.default,
    postIndividualCrp: postIndividualCrp_1.default,
    postCorporateCustomerFromGrof: postCorporateCustomer_v3_1.default,
    postScreen: postScreen_1.default,
    getCustomer: getCustomer_1.default,
    getCustomerById: getCustomerById_1.default,
    putCustomer: putCustomer_1.default,
    getCrp: getCrp_1.default,
    getCrpById: getCrpById_1.default,
    deleteCrpById: deleteCrpById_1.default,
    putCrp: putCrp_1.default,
    getHit: getHit_1.default,
    putRemoveHit: putRemoveHit_1.default,
    getScreenSummary: getScreenSummary_1.default,
    getCustomerScreen: getCustomerScreen_1.default,
    putScreenConclusion: putScreenConclusion_1.default,
    getCrpProfile: getCrpProfile_1.default,
    removeHit: putRemoveHit_1.default,
    getRiskReport: getRiskReport_1.default,
    postApproval: postApproval_1.default,
    getMe: getMe_1.default,
    checkToken: checkToken_1.default,
    ConvertToRequest: ConvertToRequest_1.default
};
exports.default = ArtemisGrofService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzR0FBOEU7QUFDOUUsNkZBQXFFO0FBQ3JFLDZGQUFxRTtBQUNyRSxxSUFBNkc7QUFDN0csbUhBQTJGO0FBQzNGLHVIQUErRjtBQUMvRixxR0FBNkU7QUFDN0Usb0lBQTRHO0FBQzVHLHVJQUErRztBQUMvRyxxR0FBNkU7QUFDN0UsK0hBQXVHO0FBQ3ZHLHNIQUE4RjtBQUM5RiwrSEFBdUc7QUFDdkcsOEhBQXNHO0FBQ3RHLGlIQUF5RjtBQUN6RixvSUFBNEc7QUFDNUcsOElBQXNIO0FBQ3RILHdIQUFnRztBQUNoRyxvSUFBNEc7QUFDNUcsMEZBQWtFO0FBQ2xFLGdGQUF3RDtBQUN4RCwwRUFBa0Q7QUFDbEQsMEdBQWtGO0FBQ2xGLDBHQUF1RjtBQUN2Riw0R0FBb0Y7QUFDcEYsZ0dBQXdFO0FBRXhFLE1BQU0sa0JBQWtCLEdBQUc7SUFDdkIsUUFBUSxFQUFSLGtCQUFRO0lBQ1IsU0FBUyxFQUFULG1CQUFTO0lBQ1Qsd0JBQXdCLEVBQXhCLGtDQUF3QjtJQUN4QixnQkFBZ0IsRUFBaEIsMEJBQWdCO0lBQ2hCLHlCQUF5QixFQUF6QixtQ0FBeUI7SUFDekIsaUJBQWlCLEVBQWpCLDJCQUFpQjtJQUNqQiw2QkFBNkIsRUFBN0Isa0NBQTZCO0lBQzdCLFVBQVUsRUFBVixvQkFBVTtJQUNWLFdBQVcsRUFBWCxxQkFBVztJQUNYLGVBQWUsRUFBZix5QkFBZTtJQUNmLFdBQVcsRUFBWCxxQkFBVztJQUNYLE1BQU0sRUFBTixnQkFBTTtJQUNOLFVBQVUsRUFBVixvQkFBVTtJQUNWLGFBQWEsRUFBYix1QkFBYTtJQUNiLE1BQU0sRUFBTixnQkFBTTtJQUNOLE1BQU0sRUFBTixnQkFBTTtJQUNOLFlBQVksRUFBWixzQkFBWTtJQUNaLGdCQUFnQixFQUFoQiwwQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQWpCLDJCQUFpQjtJQUNqQixtQkFBbUIsRUFBbkIsNkJBQW1CO0lBQ25CLGFBQWEsRUFBYix1QkFBYTtJQUNiLFNBQVMsRUFBRSxzQkFBWTtJQUN2QixhQUFhLEVBQWIsdUJBQWE7SUFDYixZQUFZLEVBQVosc0JBQVk7SUFDWixLQUFLLEVBQUwsZUFBSztJQUNMLFVBQVUsRUFBVixvQkFBVTtJQUNWLGdCQUFnQixFQUFoQiwwQkFBZ0I7Q0FDbkIsQ0FBQTtBQUVELGtCQUFlLGtCQUFrQixDQUFBIn0=