import { TResGetCrp } from "./TResGetCrp";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getCrp(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
}): Promise<TResGetCrp>;
