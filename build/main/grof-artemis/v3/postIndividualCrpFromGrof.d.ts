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
}): Promise<any>;
