import { Member } from "../../grof/types/TGrofApplication";
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
}): Promise<import("../../artemis/v3/api/customer/_post/corporate/TResPostCustomerCorporate.v3").TResPostCustomerCorporate>;
