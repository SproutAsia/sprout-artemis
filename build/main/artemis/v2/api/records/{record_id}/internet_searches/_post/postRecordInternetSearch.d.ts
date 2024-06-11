/**
 * post customer
 * @description STEP 2d : Post Internet Search
 */
export default function postRecordInternetSearch(args: {
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
