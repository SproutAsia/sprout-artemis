import { TReqLogin } from "./TReqLogin";
import { TResLogin } from "./TResLogin";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postLogin(args: {
    req: TReqLogin;
}): Promise<TResLogin>;
