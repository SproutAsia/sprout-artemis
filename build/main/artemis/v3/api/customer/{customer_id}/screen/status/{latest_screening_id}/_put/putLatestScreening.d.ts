/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function putLatestScreening(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
        latestScreeningId: string;
    };
    body: {
        conclusions: string[];
    };
}): Promise<any>;
