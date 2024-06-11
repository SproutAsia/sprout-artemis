import { TReqPostOwnNameSearch } from "./TReqPostOwnNameSearch";
/**
 * post customer
 * @description STEP 2f : Post Own Restricted List Search
 */
export default function postOwnNameSearch(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string;
    };
    req: TReqPostOwnNameSearch;
}): Promise<any>;
