import { TReqPostRiskReport } from "./TReqPostRiskReport";
/**
 * post customer
 * @description STEP 4 : Post Risk Report
 */
export default function postRiskReport(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        customerId: string;
    };
    req: TReqPostRiskReport;
}): Promise<any>;
