import { TReqCustomerCrp } from "./TReqCustomerCrp";
/**
 * @description Corporate Workflow - STEP 2a : Add CRP
 */
export default function postCustomerCrp(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
    req: TReqCustomerCrp;
}): Promise<any>;
