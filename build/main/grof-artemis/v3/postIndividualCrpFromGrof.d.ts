import { Member } from "../../grof/types/TGrofApplication";
import ConvertToRequest from "./utils/ConvertToRequest";
/**
 * @description
 */
export default function postIndividualCrpFromGrof(args: {
    auth: {
        token: string;
    };
    grof: {
        application: {
            company: {
                members: Member;
            };
        };
    };
    path: {
        customerId: string;
    };
    additional?: Parameters<typeof ConvertToRequest.toSingleIndividualCrp>['0']['additional'];
    customFn?: Parameters<typeof ConvertToRequest.toSingleIndividualCrp>['0']['customFn'];
}): Promise<import("../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/TResPostIndividualCrp.v3").TResPostIndividualCrp>;
