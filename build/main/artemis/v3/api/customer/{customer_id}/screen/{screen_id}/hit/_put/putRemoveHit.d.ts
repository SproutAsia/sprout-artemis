/**
 * remove hit
 */
export default function putRemoveHit(args: {
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
    body: {
        screeningHitIds: string[];
    };
}): Promise<any>;
