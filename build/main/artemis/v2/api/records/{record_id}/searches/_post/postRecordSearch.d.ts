import { TReqPostRecordSearch } from "./TReqPostRecordSearch";
/**
 * post customer
 * @description STEP 2b : Post Database Screening
 */
export default function postRecordSearch(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string;
    };
    req: TReqPostRecordSearch;
}): Promise<any>;
