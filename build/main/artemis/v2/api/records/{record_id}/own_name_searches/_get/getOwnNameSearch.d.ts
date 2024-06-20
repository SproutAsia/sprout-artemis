/**
 * post customer
 * @description STEP 2g : Get Own Restricted List Search
 */
export default function getOwnNameSearch(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string;
    };
}): Promise<any>;
