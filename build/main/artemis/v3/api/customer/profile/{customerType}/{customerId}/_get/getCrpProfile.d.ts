import { TResGetCrpProfile } from "./TResGetCrpProfile";
/**
 * GET crp profile
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
