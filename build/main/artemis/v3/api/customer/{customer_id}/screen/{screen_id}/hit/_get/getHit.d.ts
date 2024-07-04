/**
 * get hit of customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getHit(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
        /**
         * you can get screen customer id from screen summary response screening.id
         */
        screenId: string;
    };
    query: {
        screeningType: "ARTEMISCAN" | "INTERNET_SEARCH" | "TR";
        screeningSessionId: string;
    };
}): Promise<any>;
