import { Member } from "../../grof/types/TGrofApplication";
import ConvertToRequest from "./utils/ConvertToRequest";
/**
 * @description
 */
export default function postCorporateCrpFromGrof(args: {
    auth: {
        token: string;
    };
    grof: {
        application: {
            company: {
                member: Member;
            };
        };
    };
    path: {
        customerId: string;
    };
    additional?: Parameters<typeof ConvertToRequest.toSingleCorporateCrp>['0']['additional'];
    customFn?: Parameters<typeof ConvertToRequest.toSingleCorporateCrp>['0']['customFn'];
}): Promise<import("../../artemis/v3/api/customer/_post/corporate/TResPostCustomerCorporate.v3").TResPostCustomerCorporate>;
