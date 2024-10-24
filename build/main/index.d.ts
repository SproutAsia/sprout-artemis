import postLogin from "./artemis/v3/api/authentication/login/_post/postLogin";
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
declare const ArtemisGrofService: {
    checkEnv: typeof checkEnv;
    postLogin: typeof postLogin;
    postCorporateCrpFromGrof: typeof postCorporateCrpFromGrof;
    postCorporateCrp: typeof postCorporateCrp;
    postIndividualCrpFromGrof: typeof postIndividualCrpFromGrof;
    postIndividualCrp: typeof postIndividualCrp;
    postCorporateCustomerFromGrof: typeof postCorporateCustomerFromGrof;
    postScreen: typeof postScreen;
    getCustomer: typeof getCustomer;
    getCustomerById: typeof getCustomerById;
    putCustomer: typeof putCustomer;
    getCrp: typeof getCrp;
    getCrpById: typeof getCrpById;
    deleteCrpById: typeof deleteCrpById;
    putCrp: typeof putCrp;
    getHit: typeof getHit;
    putRemoveHit: typeof putRemoveHit;
    getScreenSummary: typeof getScreenSummary;
    getCustomerScreen: typeof getCustomerScreen;
    putScreenConclusion: typeof putScreenConclusion;
    getCrpProfile: typeof getCrpProfile;
    removeHit: typeof putRemoveHit;
    getRiskReport: typeof getRiskReport;
    postApproval: typeof postApproval;
    getMe: typeof getMe;
    checkToken: typeof checkToken;
    getComment: typeof getComment;
    postComment: typeof postComment;
    ConvertToRequest: {
        toCorporateCustomer(args: {
            application: import("./grof/types/TGrofApplication").TGrofApplication;
            assigneeId: string;
            additional?: {
                referenceId?: string;
                additionalInformation?: string;
            };
            customFn?: {
                parseCountry?: (country: string) => string;
                customerId?: (customerId: string) => string;
            };
        }): import("./artemis/v3/api/customer/_post/corporate/TReqPostCustomerCorporate.v3").TReqPostCustomerCorporate;
        toSingleIndividualCrp(args: {
            member: import("./grof/types/TGrofApplication").Member;
            additional?: {
                additionalInformation?: string;
                otherSourceOfFunds?: string;
                formerName?: string[];
            };
            customFn?: {
                parseCountry?: (country: string) => string;
                customerId?: (customerId: string) => string;
            };
        }): import("./artemis/v3/api/customer/{customer_id}/crp/_post/individual/TReqPostIndividualCrp.v3").TReqPostIndividualCrp;
        toSingleCorporateCrp(args: {
            member: import("./grof/types/TGrofApplication").Member;
            additional?: {
                additionalInformation?: string;
                formerName?: string[];
                otherSourceOfFunds?: string;
            };
            customFn?: {
                parseCountry?: (country: string) => string;
                customerId?: (customerId: string) => string;
            };
        }): import("./artemis/v3/api/customer/{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3").TReqPostCorporateCrp;
    };
    ConvertToArtemisEnum: {
        ssic: (code: string) => string;
        country: (country: string) => string;
        onboarding: (args: string) => string;
        appointmentToRole: (appointments: any[]) => any;
        documentType: (type: string) => "INTERNATIONAL PASSPORT" | "NATIONAL ID";
        sourceOfFund: (source?: string) => "SALARY" | "INVESTMENT REVENUE" | "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN" | "OTHERS";
        companySourceOfFund: (source: string) => "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN" | "OTHERS";
        role: (memberRole: string) => "DIRECTOR" | "DIRECTOR (NOMINEE)" | "SHAREHOLDER" | "NOMINEE/TRUSTEE" | "ULTIMATE BENEFICIAL OWNER" | "AUTHORIZED PERSON";
        entityType: (entityType: string, country: string) => string;
        shortCountry: (country: string) => string;
        toSingaporeAddress: (address: {
            blockHouse?: string;
            streetName?: string;
            buildingName?: string;
            level?: string;
            unit?: string;
            postalCode?: string;
        }) => string;
    };
};
export default ArtemisGrofService;
