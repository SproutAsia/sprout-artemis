/**
 * @description Individual Workflow - STEP 2a : Get Record ID and CRP ID
 * @description Corporate Workflow - STEP 3a : Get Record ID and CRP ID
 */
export default function getCustomerCrps(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
}): Promise<any>;
