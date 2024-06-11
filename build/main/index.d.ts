import postLogin from "./artemis/v3/api/authentication/login/_post/postLogin";
import postCorporateCrpFromGrof from "./grof-artemis/v3/postCorporateCrpFromGrof";
import postCorporateCustomerFromGrof from "./grof-artemis/v3/postCorporateCustomer.v3";
import postIndividualCrpFromGrof from "./grof-artemis/v3/postIndividualCrpFromGrof";
import postIndividualCustomerFromGrof from "./grof-artemis/v3/postIndividualCustomer.v3";
declare const ArtemisGrofService: {
    postLogin: typeof postLogin;
    postCorporateCrpFromGrof: typeof postCorporateCrpFromGrof;
    postIndividualCrpFromGrof: typeof postIndividualCrpFromGrof;
    postCorporateCustomerFromGrof: typeof postCorporateCustomerFromGrof;
    postIndividualCustomerFromGrof: typeof postIndividualCustomerFromGrof;
};
export default ArtemisGrofService;
