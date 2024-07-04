"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/order */
const postLogin_1 = __importDefault(require("./artemis/v3/api/authentication/login/_post/postLogin"));
const getCrpProfile_1 = __importDefault(require("./artemis/v3/api/customer/profile/{customerType}/{customerId}/_get/getCrpProfile"));
const getCustomer_1 = __importDefault(require("./artemis/v3/api/customer/_get/getCustomer"));
const postApproval_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/approval/_post/postApproval"));
const getCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_get/getCrp"));
const getRiskReport_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/risk-assessment/_get/getRiskReport"));
const getScreenSummary_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/summary/_get/getScreenSummary"));
const postScreen_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/_post/postScreen"));
const getHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_get/getHit"));
const putRemoveHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_put/putRemoveHit"));
const checkEnv_1 = __importDefault(require("./grof-artemis/v3/checkEnv"));
const postCorporateCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postCorporateCrpFromGrof"));
const postCorporateCustomer_v3_1 = __importDefault(require("./grof-artemis/v3/postCorporateCustomer.v3"));
const postIndividualCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postIndividualCrpFromGrof"));
const postIndividualCustomer_v3_1 = __importDefault(require("./grof-artemis/v3/postIndividualCustomer.v3"));
const ArtemisGrofService = {
    checkEnv: checkEnv_1.default,
    postLogin: postLogin_1.default,
    postCorporateCrpFromGrof: postCorporateCrpFromGrof_1.default,
    postIndividualCrpFromGrof: postIndividualCrpFromGrof_1.default,
    postCorporateCustomerFromGrof: postCorporateCustomer_v3_1.default,
    postIndividualCustomerFromGrof: postIndividualCustomer_v3_1.default,
    postScreen: postScreen_1.default,
    getCustomer: getCustomer_1.default,
    getCrp: getCrp_1.default,
    getHit: getHit_1.default,
    getScreenSummary: getScreenSummary_1.default,
    getCrpProfile: getCrpProfile_1.default,
    removeHit: putRemoveHit_1.default,
    getRiskReport: getRiskReport_1.default,
    postApproval: postApproval_1.default
};
exports.default = ArtemisGrofService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsc0dBQThFO0FBQzlFLHFJQUE2RztBQUM3Ryw2RkFBcUU7QUFDckUsdUhBQStGO0FBQy9GLHFHQUE2RTtBQUM3RSwrSEFBdUc7QUFDdkcsb0lBQTRHO0FBQzVHLGlIQUF5RjtBQUN6Rix3SEFBZ0c7QUFDaEcsb0lBQTRHO0FBQzVHLDBFQUFrRDtBQUNsRCwwR0FBa0Y7QUFDbEYsMEdBQXVGO0FBQ3ZGLDRHQUFvRjtBQUNwRiw0R0FBeUY7QUFFekYsTUFBTSxrQkFBa0IsR0FBRztJQUN2QixRQUFRLEVBQVIsa0JBQVE7SUFDUixTQUFTLEVBQVQsbUJBQVM7SUFDVCx3QkFBd0IsRUFBeEIsa0NBQXdCO0lBQ3hCLHlCQUF5QixFQUF6QixtQ0FBeUI7SUFDekIsNkJBQTZCLEVBQTdCLGtDQUE2QjtJQUM3Qiw4QkFBOEIsRUFBOUIsbUNBQThCO0lBQzlCLFVBQVUsRUFBVixvQkFBVTtJQUNWLFdBQVcsRUFBWCxxQkFBVztJQUNYLE1BQU0sRUFBTixnQkFBTTtJQUNOLE1BQU0sRUFBTixnQkFBTTtJQUNOLGdCQUFnQixFQUFoQiwwQkFBZ0I7SUFDaEIsYUFBYSxFQUFiLHVCQUFhO0lBQ2IsU0FBUyxFQUFFLHNCQUFZO0lBQ3ZCLGFBQWEsRUFBYix1QkFBYTtJQUNiLFlBQVksRUFBWixzQkFBWTtDQUNmLENBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQSJ9