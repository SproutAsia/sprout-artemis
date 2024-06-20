import postLogin from "./artemis/v3/api/authentication/login/_post/postLogin";
import getCustomer from "./artemis/v3/api/customer/_get/getCustomer";
import getCrp from "./artemis/v3/api/customer/{customer_id}/crp/_get/getCrp";
import checkEnv from "./grof-artemis/v3/checkEnv";
import postCorporateCrpFromGrof from "./grof-artemis/v3/postCorporateCrpFromGrof";
import postCorporateCustomerFromGrof from "./grof-artemis/v3/postCorporateCustomer.v3";
import postIndividualCrpFromGrof from "./grof-artemis/v3/postIndividualCrpFromGrof";
import postIndividualCustomerFromGrof from "./grof-artemis/v3/postIndividualCustomer.v3";

const ArtemisGrofService = {
    postLogin,
    postCorporateCrpFromGrof,
    postIndividualCrpFromGrof,
    postCorporateCustomerFromGrof,
    postIndividualCustomerFromGrof,
    getCustomer,
    getCrp,
    checkEnv
}

export default ArtemisGrofService

