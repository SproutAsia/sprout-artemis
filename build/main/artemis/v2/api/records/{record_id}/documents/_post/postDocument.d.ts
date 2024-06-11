import { TReqPostDocument } from "./TReqPostDocument";
/**
 * post customer
 * @description STEP 2f : Post Own Restricted List Search
 */
export default function postDocument(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string;
    };
    req: TReqPostDocument;
}): Promise<any>;
