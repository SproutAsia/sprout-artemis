import { TReqLogin } from "../TReqLogin";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postLogin(args: {
    req: TReqLogin;
}): Promise<any>;
