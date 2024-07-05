import { TResGetCrpById } from "./TResGetCrpById";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getCrpById(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
        crpId: string;
    };
}): Promise<TResGetCrpById>;
