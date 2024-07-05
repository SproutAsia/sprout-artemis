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
const getRiskReport_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/risk-assessment/_get/getRiskReport"));
const getScreenSummary_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/summary/_get/getScreenSummary"));
const postScreen_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/_post/postScreen"));
const getHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_get/getHit"));
const putRemoveHit_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_put/putRemoveHit"));
const putScreenConclusion_1 = __importDefault(require("./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/_put/putScreenConclusion"));
const checkToken_1 = __importDefault(require("./artemis/v3/api/user/me/_get/checkToken"));
const getMe_1 = __importDefault(require("./artemis/v3/api/user/me/_get/getMe"));
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
    putCustomer: putCustomer_1.default,
    getCrp: getCrp_1.default,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsc0dBQThFO0FBQzlFLHFJQUE2RztBQUM3Ryw2RkFBcUU7QUFDckUsNkZBQXFFO0FBQ3JFLHVIQUErRjtBQUMvRixxR0FBNkU7QUFDN0UscUdBQTZFO0FBQzdFLCtIQUF1RztBQUN2RyxvSUFBNEc7QUFDNUcsaUhBQXlGO0FBQ3pGLHdIQUFnRztBQUNoRyxvSUFBNEc7QUFDNUcsOElBQXNIO0FBQ3RILDBGQUFrRTtBQUNsRSxnRkFBd0Q7QUFDeEQsMEVBQWtEO0FBQ2xELDBHQUFrRjtBQUNsRiwwR0FBdUY7QUFDdkYsNEdBQW9GO0FBQ3BGLDRHQUF5RjtBQUV6RixNQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLFFBQVEsRUFBUixrQkFBUTtJQUNSLFNBQVMsRUFBVCxtQkFBUztJQUNULHdCQUF3QixFQUF4QixrQ0FBd0I7SUFDeEIseUJBQXlCLEVBQXpCLG1DQUF5QjtJQUN6Qiw2QkFBNkIsRUFBN0Isa0NBQTZCO0lBQzdCLDhCQUE4QixFQUE5QixtQ0FBOEI7SUFDOUIsVUFBVSxFQUFWLG9CQUFVO0lBQ1YsV0FBVyxFQUFYLHFCQUFXO0lBQ1gsV0FBVyxFQUFYLHFCQUFXO0lBQ1gsTUFBTSxFQUFOLGdCQUFNO0lBQ04sTUFBTSxFQUFOLGdCQUFNO0lBQ04sTUFBTSxFQUFOLGdCQUFNO0lBQ04sZ0JBQWdCLEVBQWhCLDBCQUFnQjtJQUNoQixtQkFBbUIsRUFBbkIsNkJBQW1CO0lBQ25CLGFBQWEsRUFBYix1QkFBYTtJQUNiLFNBQVMsRUFBRSxzQkFBWTtJQUN2QixhQUFhLEVBQWIsdUJBQWE7SUFDYixZQUFZLEVBQVosc0JBQVk7SUFDWixLQUFLLEVBQUwsZUFBSztJQUNMLFVBQVUsRUFBVixvQkFBVTtDQUNiLENBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQSJ9