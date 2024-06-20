import { TReqPostCustomerCorporate } from "../../../artemis/v3/api/customer/_post/corporate/TReqPostCustomerCorporate.v3";
import { TReqPostCorporateCrp } from "../../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3";
import { TReqPostIndividualCrp } from "../../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/TReqPostIndividualCrp.v3";
import { TGrofApplication } from "../../../grof/types/TGrofApplication";
declare const ConvertToRequest: {
    toCorporateCustomer(args: {
        application: TGrofApplication;
        additional?: {
            referenceId?: string;
            additionalInformation?: string;
            formerName?: string[];
        };
    }): TReqPostCustomerCorporate;
    toSingleIndividualCrp(args: {
        member: TGrofApplication['company']['members'][0];
        additional?: {
            additionalInformation?: string;
            otherSourceOfFunds?: string;
            formerName?: string[];
        };
    }): TReqPostIndividualCrp;
    toSingleCorporateCrp(args: {
        member: TGrofApplication['company']['members'][0];
        additional?: {
            additionalInformation?: string;
            formerName?: string[];
            otherSourceOfFunds?: string;
        };
    }): TReqPostCorporateCrp;
};
export default ConvertToRequest;
