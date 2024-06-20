/**
 * post customer
 * @description STEP 2e : Get Internet Search
 */
export default function getRecordInternetSearch(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string;
    };
    query: {
        limit?: number;
    };
}): Promise<any>;
