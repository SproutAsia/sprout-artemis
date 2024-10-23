/* eslint-disable import/order */
import postLogin from "./artemis/v3/api/authentication/login/_post/postLogin";
import deleteComment from "./artemis/v3/api/comment/_delete/deleteComment";
import getComment from "./artemis/v3/api/comment/_get/getComment";
import postComment from "./artemis/v3/api/comment/_post/postComment";
import getCrpProfile from "./artemis/v3/api/customer/profile/{customerType}/{customerId}/_get/getCrpProfile";
import getCustomer from "./artemis/v3/api/customer/_get/getCustomer";
import putCustomer from "./artemis/v3/api/customer/_put/putCustomer";
import postApproval from "./artemis/v3/api/customer/{customer_id}/approval/_post/postApproval";
import getCrp from "./artemis/v3/api/customer/{customer_id}/crp/_get/getCrp";
import postCorporateCrp from "./artemis/v3/api/customer/{customer_id}/crp/_post/corporate/postCorporateCrp";
import postIndividualCrp from "./artemis/v3/api/customer/{customer_id}/crp/_post/individual/postIndividualCrp";
import putCrp from "./artemis/v3/api/customer/{customer_id}/crp/_put/putCrp";
import deleteCrpById from "./artemis/v3/api/customer/{customer_id}/crp/{crp_id}/_delete/deleteCrpById";
import getCrpById from "./artemis/v3/api/customer/{customer_id}/crp/{crp_id}/_get/getCrpById";
import getRiskReport from "./artemis/v3/api/customer/{customer_id}/risk-assessment/_get/getRiskReport";
import getScreenSummary from "./artemis/v3/api/customer/{customer_id}/screen/summary/_get/getScreenSummary";
import getCustomerScreen from "./artemis/v3/api/customer/{customer_id}/screen/_get/getCustomerScreen";
import postScreen from "./artemis/v3/api/customer/{customer_id}/screen/_post/postScreen";
import getHit from "./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_get/getHit";
import putRemoveHit from "./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/hit/_put/putRemoveHit";
import putScreenConclusion from "./artemis/v3/api/customer/{customer_id}/screen/{screen_id}/_put/putScreenConclusion";
import getCustomerById from "./artemis/v3/api/customer/{customer_id}/_get/getCustomerById";
import checkToken from "./artemis/v3/api/user/me/_get/checkToken";
import getMe from "./artemis/v3/api/user/me/_get/getMe";
import checkEnv from "./grof-artemis/v3/checkEnv";
import postCorporateCrpFromGrof from "./grof-artemis/v3/postCorporateCrpFromGrof";
import postCorporateCustomerFromGrof from "./grof-artemis/v3/postCorporateCustomer.v3";
import postIndividualCrpFromGrof from "./grof-artemis/v3/postIndividualCrpFromGrof";
import ConvertToArtemisEnum from "./grof-artemis/v3/utils/ConvertEnum";
import ConvertToRequest from "./grof-artemis/v3/utils/ConvertToRequest";
import getUsers from "./artemis/v3/api/user/_get/getUsers";

const ArtemisGrofService = {
    checkEnv,
    postLogin,
    postCorporateCrpFromGrof,
    postCorporateCrp,
    postIndividualCrpFromGrof,
    postIndividualCrp,
    postCorporateCustomerFromGrof,
    postScreen,
    getCustomer,
    getCustomerById,
    putCustomer,
    getCrp,
    getCrpById,
    deleteCrpById,
    putCrp,
    getHit,
    putRemoveHit,
    getScreenSummary,
    getCustomerScreen,
    putScreenConclusion,
    getCrpProfile,
    removeHit: putRemoveHit,
    getRiskReport,
    postApproval,
    getMe,
    checkToken,
    getComment,
    postComment,
    deleteComment,
    ConvertToRequest,
    ConvertToArtemisEnum,
    getUsers
}

export default ArtemisGrofService