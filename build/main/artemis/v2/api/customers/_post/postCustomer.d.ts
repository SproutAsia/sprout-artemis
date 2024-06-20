import { TReqPostCustomer } from "./TReqPostCustomer";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postCustomer(args: {
    auth: {
        token: string;
    };
    req: TReqPostCustomer;
}): Promise<any>;
