import { TReqApproval } from "./TReqApproval";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postApproval(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
    body: TReqApproval;
}): Promise<any>;
