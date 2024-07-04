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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsc0dBQThFO0FBQzlFLHFJQUE2RztBQUM3Ryw2RkFBcUU7QUFDckUsdUhBQStGO0FBQy9GLHFHQUE2RTtBQUM3RSwrSEFBdUc7QUFDdkcsb0lBQTRHO0FBQzVHLHdIQUFnRztBQUNoRyxvSUFBNEc7QUFDNUcsMEVBQWtEO0FBQ2xELDBHQUFrRjtBQUNsRiwwR0FBdUY7QUFDdkYsNEdBQW9GO0FBQ3BGLDRHQUF5RjtBQUV6RixNQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLFFBQVEsRUFBUixrQkFBUTtJQUNSLFNBQVMsRUFBVCxtQkFBUztJQUNULHdCQUF3QixFQUF4QixrQ0FBd0I7SUFDeEIseUJBQXlCLEVBQXpCLG1DQUF5QjtJQUN6Qiw2QkFBNkIsRUFBN0Isa0NBQTZCO0lBQzdCLDhCQUE4QixFQUE5QixtQ0FBOEI7SUFDOUIsV0FBVyxFQUFYLHFCQUFXO0lBQ1gsTUFBTSxFQUFOLGdCQUFNO0lBQ04sTUFBTSxFQUFOLGdCQUFNO0lBQ04sZ0JBQWdCLEVBQWhCLDBCQUFnQjtJQUNoQixhQUFhLEVBQWIsdUJBQWE7SUFDYixTQUFTLEVBQUUsc0JBQVk7SUFDdkIsYUFBYSxFQUFiLHVCQUFhO0lBQ2IsWUFBWSxFQUFaLHNCQUFZO0NBQ2YsQ0FBQTtBQUVELGtCQUFlLGtCQUFrQixDQUFBIn0=