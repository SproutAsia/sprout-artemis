import { TResGetCustomer } from "./TResGetCustomer";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getCustomer(args: {
    auth: {
        token: string;
    };
    filter: {
        customerStatus?: string;
        customerType?: "INDIVIDUAL" | "CORPORATE";
        referenceId?: string;
        riskRating?: string;
        searchString?: string;
    };
    pagination?: {
        size: number;
        page: number;
    };
}): Promise<TResGetCustomer>;
