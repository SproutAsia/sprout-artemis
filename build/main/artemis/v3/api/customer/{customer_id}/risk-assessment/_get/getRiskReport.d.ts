import { TResGetRiskReport } from "./TResGetRiskReport";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getRiskReport(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
}): Promise<TResGetRiskReport>;
