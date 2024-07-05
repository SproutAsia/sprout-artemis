/* eslint-disable import/order */
import postLogin from "./artemis/v3/api/authentication/login/_post/postLogin";
import getCrpProfile from "./artemis/v3/api/customer/profile/{customerType}/{customerId}/_get/getCrpProfile";
import getCustomer from "./artemis/v3/api/customer/_get/getCustomer";
import putCustomer from "./artemis/v3/api/customer/_put/putCustomer";
import postApproval from "./artemis/v3/api/customer/{customer_id}/approval/_post/postApproval";
import getCrp from "./artemis/v3/api/customer/{customer_id}/crp/_get/getCrp";
import putCrp from "./artemis/v3/api/customer/{customer_id}/crp/_put/putCrp";
import getRiskReport from "./artemis/v3/api/customer/{customer_id}/risk-assessment/_get/getRiskReport";
import getScreenSummary from "./artemis/v3/api/customer/{customer_id}/screen/summary/_get/getScreenSummary";
import postScreen from "./artemis/v3/api/customer/{customer_id}/screen/_post/postScreen";
import getHit from "./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_get/getHit";
import putRemoveHit from "./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_put/putRemoveHit";
import putScreenConclusion from "./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/_put/putScreenConclusion";
import checkToken from "./artemis/v3/api/user/me/_get/checkToken";
import getMe from "./artemis/v3/api/user/me/_get/getMe";
import checkEnv from "./grof-artemis/v3/checkEnv";
import postCorporateCrpFromGrof from "./grof-artemis/v3/postCorporateCrpFromGrof";
import postCorporateCustomerFromGrof from "./grof-artemis/v3/postCorporateCustomer.v3";
import postIndividualCrpFromGrof from "./grof-artemis/v3/postIndividualCrpFromGrof";

const ArtemisGrofService = {
    checkEnv,
    postLogin,
    postCorporateCrpFromGrof,
    postIndividualCrpFromGrof,
    postCorporateCustomerFromGrof,
    postScreen,
    getCustomer,
    putCustomer,
    getCrp,
    putCrp,
    getHit,
    getScreenSummary,
    putScreenConclusion,
    getCrpProfile,
    removeHit: putRemoveHit,
    getRiskReport,
    postApproval,
    getMe,
    checkToken,
}

export default ArtemisGrofService