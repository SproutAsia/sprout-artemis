import { TReqPostCorporateCrp } from "../{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3";
import { TResPutCustomer } from "./TResPutCustomer";
/**
 * update customer
 */
export default function putCustomer(args: {
    auth: {
        token: string;
    };
    req: TReqPostCorporateCrp;
}): Promise<TResPutCustomer>;
