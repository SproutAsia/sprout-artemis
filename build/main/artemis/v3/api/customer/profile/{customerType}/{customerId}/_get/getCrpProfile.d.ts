import { TResGetCrpProfile } from "./TResGetCrpProfile";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getCrpProfile(args: {
    auth: {
        token: string;
    };
    filter: {
        customerId: string;
        customerType: "INDIVIDUAL" | "CORPORATE";
        searchString?: string;
    };
}): Promise<TResGetCrpProfile>;
