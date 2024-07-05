import { TReqPostCorporateCrp } from "../{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3";
/**
 * update customer
 */
export default function putCustomer(args: {
    auth: {
        token: string;
    };
    req: TReqPostCorporateCrp;
}): Promise<any>;
