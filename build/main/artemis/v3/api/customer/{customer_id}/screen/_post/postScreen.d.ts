/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postScreen(args: {
    auth: {
        token: string;
    };
    query: {
        includeCrp: boolean;
        onlyUpdated: boolean;
    };
    path: {
        customerId: string;
    };
}): Promise<any>;
