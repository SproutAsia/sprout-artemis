"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/order */
const postLogin_1 = __importDefault(require("./artemis/v3/api/authentication/login/_post/postLogin"));
const getCrpProfile_1 = __importDefault(require("./artemis/v3/api/customer/profile/{customerType}/{customerId}/_get/getCrpProfile"));
const getCustomer_1 = __importDefault(require("./artemis/v3/api/customer/_get/getCustomer"));
const putCustomer_1 = __importDefault(require("./artemis/v3/api/customer/_put/putCustomer"));
const postApproval_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/approval/_post/postApproval"));
const getCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_get/getCrp"));
const putCrp_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/_put/putCrp"));
const getCrpById_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/crp/{crp_id}/_get/getCrpById"));
const getRiskReport_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/risk-assessment/_get/getRiskReport"));
const getScreenSummary_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/summary/_get/getScreenSummary"));
const postScreen_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/_post/postScreen"));
const getHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_get/getHit"));
const putRemoveHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_put/putRemoveHit"));
const putScreenConclusion_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/_put/putScreenConclusion"));
const getCustomerById_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/_get/getCustomerById"));
const checkToken_1 = __importDefault(require("./artemis/v3/api/user/me/_get/checkToken"));
const getMe_1 = __importDefault(require("./artemis/v3/api/user/me/_get/getMe"));
const checkEnv_1 = __importDefault(require("./grof-artemis/v3/checkEnv"));
const postCorporateCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postCorporateCrpFromGrof"));
const postCorporateCustomer_v3_1 = __importDefault(require("./grof-artemis/v3/postCorporateCustomer.v3"));
const postIndividualCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postIndividualCrpFromGrof"));
const ArtemisGrofService = {
    checkEnv: checkEnv_1.default,
    postLogin: postLogin_1.default,
    postCorporateCrpFromGrof: postCorporateCrpFromGrof_1.default,
    postIndividualCrpFromGrof: postIndividualCrpFromGrof_1.default,
    postCorporateCustomerFromGrof: postCorporateCustomer_v3_1.default,
    postScreen: postScreen_1.default,
    getCustomer: getCustomer_1.default,
    getCustomerById: getCustomerById_1.default,
    putCustomer: putCustomer_1.default,
    getCrp: getCrp_1.default,
    getCrpById: getCrpById_1.default,
    putCrp: putCrp_1.default,
    getHit: getHit_1.default,
    getScreenSummary: getScreenSummary_1.default,
    putScreenConclusion: putScreenConclusion_1.default,
    getCrpProfile: getCrpProfile_1.default,
    removeHit: putRemoveHit_1.default,
    getRiskReport: getRiskReport_1.default,
    postApproval: postApproval_1.default,
    getMe: getMe_1.default,
    checkToken: checkToken_1.default,
};
exports.default = ArtemisGrofService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsc0dBQThFO0FBQzlFLHFJQUE2RztBQUM3Ryw2RkFBcUU7QUFDckUsNkZBQXFFO0FBQ3JFLHVIQUErRjtBQUMvRixxR0FBNkU7QUFDN0UscUdBQTZFO0FBQzdFLHNIQUE4RjtBQUM5RiwrSEFBdUc7QUFDdkcsb0lBQTRHO0FBQzVHLGlIQUF5RjtBQUN6Rix3SEFBZ0c7QUFDaEcsb0lBQTRHO0FBQzVHLDhJQUFzSDtBQUN0SCxtSEFBMkY7QUFDM0YsMEZBQWtFO0FBQ2xFLGdGQUF3RDtBQUN4RCwwRUFBa0Q7QUFDbEQsMEdBQWtGO0FBQ2xGLDBHQUF1RjtBQUN2Riw0R0FBb0Y7QUFFcEYsTUFBTSxrQkFBa0IsR0FBRztJQUN2QixRQUFRLEVBQVIsa0JBQVE7SUFDUixTQUFTLEVBQVQsbUJBQVM7SUFDVCx3QkFBd0IsRUFBeEIsa0NBQXdCO0lBQ3hCLHlCQUF5QixFQUF6QixtQ0FBeUI7SUFDekIsNkJBQTZCLEVBQTdCLGtDQUE2QjtJQUM3QixVQUFVLEVBQVYsb0JBQVU7SUFDVixXQUFXLEVBQVgscUJBQVc7SUFDWCxlQUFlLEVBQWYseUJBQWU7SUFDZixXQUFXLEVBQVgscUJBQVc7SUFDWCxNQUFNLEVBQU4sZ0JBQU07SUFDTixVQUFVLEVBQVYsb0JBQVU7SUFDVixNQUFNLEVBQU4sZ0JBQU07SUFDTixNQUFNLEVBQU4sZ0JBQU07SUFDTixnQkFBZ0IsRUFBaEIsMEJBQWdCO0lBQ2hCLG1CQUFtQixFQUFuQiw2QkFBbUI7SUFDbkIsYUFBYSxFQUFiLHVCQUFhO0lBQ2IsU0FBUyxFQUFFLHNCQUFZO0lBQ3ZCLGFBQWEsRUFBYix1QkFBYTtJQUNiLFlBQVksRUFBWixzQkFBWTtJQUNaLEtBQUssRUFBTCxlQUFLO0lBQ0wsVUFBVSxFQUFWLG9CQUFVO0NBQ2IsQ0FBQTtBQUVELGtCQUFlLGtCQUFrQixDQUFBIn0=