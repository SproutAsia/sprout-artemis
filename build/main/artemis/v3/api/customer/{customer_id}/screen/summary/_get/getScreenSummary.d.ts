import { TResGetScreenSummary } from "./TResGetScreenSummary";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getScreenSummary(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
}): Promise<TResGetScreenSummary>;
