import { TReqPostCustomerCorporate } from "./TReqPostCustomerCorporate.v3";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postCorporateCustomer(args: {
    auth: {
        token: string;
    };
    req: TReqPostCustomerCorporate;
}): Promise<any>;
