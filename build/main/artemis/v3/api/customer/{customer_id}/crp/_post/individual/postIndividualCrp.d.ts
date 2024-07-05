import { TReqPostIndividualCrp } from "./TReqPostIndividualCrp.v3";
import { TResPostIndividualCrp } from "./TResPostIndividualCrp.v3";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postIndividualCrp(args: {
    auth: {
        token: string;
    };
    req: TReqPostIndividualCrp;
    path: {
        customerId: string;
    };
}): Promise<TResPostIndividualCrp>;
